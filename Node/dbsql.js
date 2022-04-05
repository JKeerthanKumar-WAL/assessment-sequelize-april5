const Sequelize = require("sequelize");

const db = new Sequelize("westsidenode", "root", "keerthankumar", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = db;
