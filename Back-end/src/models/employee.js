"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init(
    {
      employeeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      roleId: DataTypes.INTEGER,
      employeeName: DataTypes.STRING,
      employeePassword: DataTypes.STRING,
      employeeGender: DataTypes.BOOLEAN,
      employeeEmail: DataTypes.STRING,
      employeePhone: DataTypes.STRING,
      employeeDateOfBirth: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );
  return Employee;
};
