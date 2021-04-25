const { DataTypes } = require("sequelize/types");
const { sequelize } = require("../config/db");
const Product = require("./product");

const Order = sequelize.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    customerPhone: {
      type: DataTypes.INTEGER,
    },
    customerLocation: {
      type: DataTypes.STRING,
    },
    productName: {
      type: DataTypes.STRING,
    },
    productQuantity: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.ENUM,
      values: ["delivered", "Pending"],
    },
  },
  sequelize.sync({ alter: true })
);
Order.hasMany(Product);
Product.belongsTo(Order);

module.exports = Order;
