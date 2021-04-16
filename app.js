const express = require("express");
require("dotenv").config();
const { connectionToDB } = require("./config/db");
const PORT = process.env.APP_PORT || 3333;
const app = express();
async function main() {
  await connectionToDB();
  app.listen(PORT, () => console.log(`app start on ${PORT}`));
}
console.log(process.env.APP_PORT);
main();
