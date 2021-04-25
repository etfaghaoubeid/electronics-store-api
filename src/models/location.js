const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Location = sequelize.define(
  "location",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    state: {
      type: DataTypes.STRING,
    },
  },
  sequelize.sync({ alter: true })
);
module.exports = Location;
