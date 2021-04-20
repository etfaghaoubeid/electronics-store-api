const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Location = require("./location");

const Customer = sequelize.define(
  "customer",
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
    phoneNumber: {
      type: DataTypes.STRING,
    },
  },
  sequelize.sync({ alter: true })
);
// two customers can have the same location
Location.hasMany(Customer, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Customer.belongsTo(Location);
module.exports = Customer;
