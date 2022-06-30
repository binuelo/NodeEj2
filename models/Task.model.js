const { DataTypes } = require("sequelize");
const { db } = require("../utils/DB");

const Task = db.define("task", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  title: {
    type: DataTypes.STRING,
  },
  limitDate: {
    type: DataTypes.DATEONLY,
  },
  startDate: {
    type: DataTypes.DATEONLY,
  },
  finishDate: {
    type: DataTypes.DATEONLY,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
});
module.exports = { Task };
