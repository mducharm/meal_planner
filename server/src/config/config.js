module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || "sharetheload",
    user: process.env.DB_USER || "sharetheload",
    password: process.env.DB_USER || "sharetheload",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: "./sharetheload.sqlite",
      operatorsAliases: false
    }
  }
};
