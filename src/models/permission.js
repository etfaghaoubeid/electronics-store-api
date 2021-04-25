const { sequelize } = require("../config/db");

const Permission = sequelize.define(
  "perimission",
  {},
  sequelize.sync({ alter: true })
);

module.exports = Permission;
