"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Employee", [
      {
        roleId: "1",
        employeeName: "Truc Lan",
        employeePassword: "123",
        employeeGender: "1",
        employeeEmail: "truclan@gmail.com",
        employeePhone: "0123456789",
        employeeDateOfBirth: "2001-01-11",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: "2",
        employeeName: "Minh Tri",
        employeePassword: "123",
        employeeGender: "0",
        employeeEmail: "minhtri@gmail.com",
        employeePhone: "0987654321",
        employeeDateOfBirth: "2002-05-05",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
