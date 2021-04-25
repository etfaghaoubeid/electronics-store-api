const { DataTypes } = require("sequelize/types");
const { sequelize } = require("../config/db");

const Phone = sequelize.define(
  "phone",
  {
    model: {
      type: DataTypes.STRING,
    },
    capacity: {
      type: DataTypes.INTEGER,
    },
  },
  sequelize.sync({ alter: true })
);
module.exports = Phone;
