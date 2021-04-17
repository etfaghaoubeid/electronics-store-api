const { Sequelize } = require("sequelize");
// const Phone = require("../models/phone");
// const User = require("../models/user");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    // host: process.env.HOST,
    //horst: "192.168.1.1",
    host: "192.168.132.33",
    port: 5555,
    dialect: "postgres",
  }
);
exports.connectionToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};
exports.sequelize = sequelize;
