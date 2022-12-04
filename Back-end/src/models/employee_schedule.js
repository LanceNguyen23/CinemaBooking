"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EmployeeSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmployeeSchedule.init(
    {
      employeeId: DataTypes.INTEGER,
      scheduleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "EmployeeSchedule",
    }
  );
  return EmployeeSchedule;
};
