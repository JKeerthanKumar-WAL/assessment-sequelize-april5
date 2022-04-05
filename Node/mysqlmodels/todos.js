const { Sequelize, DataTypes } = require("sequelize");

const db = require("../dbsql");

const Todos = db.define(
  "todos",
  {
    title: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);
module.exports = Todos;
