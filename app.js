require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const { up, down } = require("./seeds/phone");
const { up, down } = require("./seeds/index");
const { seedPhone, deletePhones } = require("./seeds/phone");

const PORT = process.env.APP_PORT || 3333;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", require("./routes/user"));
app.use("/api/phones", require("./routes/phone"));
async function main() {
  // down();
  // up();
  seedPhone();
  deletePhones();
  app.listen(PORT, () => console.log(`app start on ${PORT}`));
}
main();
