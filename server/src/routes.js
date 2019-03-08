module.exports = app => {
  //   app.get("/status", (req, res) => {
  //     res.send({
  //       message: "Hello"
  //     });
  //   }),
  app.post("/register", (req, res) => {
    res.send({
      message: `Hello ${req.body.email}`
    });
  });
};
