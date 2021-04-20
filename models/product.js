const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Phone = require("./phone");

const Product = sequelize.define(
  "product",
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
  },
  sequelize.sync({ alter: true })
);
Product.hasOne(Phone, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Phone.belongsTo(Product);
module.exports = Product;
