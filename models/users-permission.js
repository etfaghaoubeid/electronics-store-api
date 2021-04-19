const { sequelize } = require("../config/db");

const UsersPermission = sequelize.define(
  "users_permission",
  {},
  sequelize.sync({ alter: true })
);
module.exports = UsersPermission;
