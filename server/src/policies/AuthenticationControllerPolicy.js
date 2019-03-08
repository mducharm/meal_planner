const Joi = require("joi");

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$"))
    };

    const { error, value } = Joi.validate(req.body, schema); // eslint-disable-line no-unused-vars

    if (error) {
      switch (error.details[0].context.key) {
        case "email":
          res.status(400).send({
            error: "Not a valid email"
          });
          break;
        case "password":
          res.status(400).send({
            error: `Password failed these rules: <br>
                1. It must contain alphanumeric characters <br>
                2. It must be 8 - 32 characters long`
          });
          break;
        default:
          res.status(400).send({
            error: "Invalid registration info"
          });
          break;
      }
    } else {
      next();
    }
  }
};
