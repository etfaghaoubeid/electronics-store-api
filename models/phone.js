const { Sequelize, Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

//class User extends Model {}
const Phone = sequelize.define(
  "phone",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    capacity: {
      type: DataTypes.INTEGER,
    },
  },

  sequelize.sync({ alter: true })
);
module.exports = Phone;
