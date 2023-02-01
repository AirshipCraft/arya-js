const sequelize = require("../utils/sequelize");
var DataTypes = require('sequelize/lib/data-types');

const Task = sequelize.define("Task", {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  serverId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  assignTo: {
    type: DataTypes.STRING,
    defaultValue: false,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  archive: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  dateCreated: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Task.sync();

module.exports = Task;