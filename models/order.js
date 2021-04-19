const { sequelize } = require("../config/db");

const Order = sequelize.define("order", {}, sequelize.sync({ alter: true }));

module.exports = Order;
