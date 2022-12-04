"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserTicket.init(
    {
      userId: DataTypes.INTEGER,
      ticketId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserTicket",
    }
  );
  return UserTicket;
};
