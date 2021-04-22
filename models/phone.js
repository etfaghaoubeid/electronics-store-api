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
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    used: {
      type: DataTypes.BOOLEAN,
    },

    capacity: {
      type: DataTypes.INTEGER,
    },
    inStock: {
      type: DataTypes.BOOLEAN,
    },
  },

  sequelize.sync({ alter: true })
);
module.exports = Phone;
