require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { seedPhone, deletePhones } = require("./seeds/phone");

const PORT = process.env.APP_PORT || 3333;
const app = express();
app.use(cors());
app.use(express.json());
app.use((error, req, res, next) => {
  if (error) {
    console.log(error.message, "11111111111111111111111111111111111");
  }
  next();
});
app.use("/api/phones", require("./phone/routes"));
async function main() {
  // seedPhone();
  // deletePhones();
  app.listen(PORT, () => console.log(`app start on ${PORT}`));
}
main();
