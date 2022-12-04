"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EmployeeTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmployeeTicket.init(
    {
      employeeId: DataTypes.INTEGER,
      ticketId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "EmployeeTicket",
    }
  );
  return EmployeeTicket;
};
