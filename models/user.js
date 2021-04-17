const { Sequelize, Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
//class User extends Model {}
const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  sequelize.sync({ alter: true })
);
module.exports = User;
