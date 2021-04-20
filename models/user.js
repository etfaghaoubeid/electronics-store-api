const { Sequelize, Model, DataTypes } = require("sequelize");

const { sequelize } = require("../config/db");
const Phone = require("./phone");
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
// User.hasMany(Phone, { onDelete: "CASCADE", onUpdate: "CASCADE" });
// Phone.belongsTo(User);
module.exports = User;
