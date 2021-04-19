const { Router } = require("express");
const {
  addPhone,
  getPhones,
  editPhone,
  deletePhone,
} = require("../controllers/phone");

const router = Router();

router.post("/add-phone", addPhone);
router.get("/", getPhones);
router.put("/edit-phone/:id", editPhone);
router.delete("/delete-phone/:id", deletePhone);

module.exports = router;
