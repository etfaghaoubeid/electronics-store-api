const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");
const Product = require("./product");

const Accessory = sequelize.define(
  "accessory",
  {
    origin: {
      type: DataTypes.BOOLEAN,
    },
  },
  sequelize.sync({ alter: true })
);
Product.hasOne(Accessory, {
  onDelete: "CASCADE",
});
Accessory.belongsTo(Product);
module.exports = Accessory;
