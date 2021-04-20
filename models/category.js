const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Category = sequelize.define(
  "category",
  {
    categories: {
      type: DataTypes.ENUM,
      values: ["Phones", "Accessoire"],
    },
  },
  sequelize.sync({ alert: true })
);
module.exports = Category;
