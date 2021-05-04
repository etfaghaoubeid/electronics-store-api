const { Router } = require("express");
const { use } = require("../middleware/tryAndCash");
const {
  getPhones,
  addPhone,
  deletePhone,
  editPhone,
  getPhone,
} = require("./controller");
const router = Router();

router.get("/", use(getPhones));
router.post("/add-phone", addPhone);
router.delete("/phone/:id", deletePhone);
router.get("/phone/:id", getPhone);
router.put("/phone-update/:id", editPhone);

module.exports = router;
