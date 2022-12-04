"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Employee", {
      employeeId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: "employeeId",
      },
      roleId: {
        type: Sequelize.INTEGER,
      },
      employeeName: {
        type: Sequelize.STRING,
      },
      employeePassword: {
        type: Sequelize.STRING,
      },
      employeeGender: {
        type: Sequelize.BOOLEAN,
      },
      employeeEmail: {
        type: Sequelize.STRING,
      },
      employeePhone: {
        type: Sequelize.STRING,
      },
      employeeDateOfBirth: {
        type: Sequelize.DATEONLY,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Employee");
  },
};
