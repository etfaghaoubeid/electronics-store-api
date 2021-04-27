const { Router } = require("express");
const {
  getPhones,
  addPhone,
  deletePhone,
  editPhone,
  getPhone,
} = require("./controller");
const router = Router();

router.get("/", getPhones);
router.post("/add-phone", addPhone);
router.delete("/phone/:id", deletePhone);
router.get("/phone/:id", getPhone);
router.put("/phone-update/:id", editPhone);

module.exports = router;
