"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Movie", {
      movieId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      movieName: {
        type: Sequelize.STRING,
      },
      movieSecondName: {
        type: Sequelize.STRING,
      },
      movieRating: {
        type: Sequelize.FLOAT,
      },
      movieNumberRating: {
        type: Sequelize.INTEGER,
      },
      movieDuration: {
        type: Sequelize.INTEGER,
      },
      movieActor: {
        type: Sequelize.STRING,
      },
      movieDirector: {
        type: Sequelize.STRING,
      },
      movieCountry: {
        type: Sequelize.STRING,
      },
      movieProducer: {
        type: Sequelize.STRING,
      },
      moviePremiere: {
        type: Sequelize.DATEONLY,
      },
      movieContent: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("Movie");
  },
};
