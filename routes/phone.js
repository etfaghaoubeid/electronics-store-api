const { Router } = require("express");
const { addPhone, getPhones, editPhone } = require("../controllers/phone");

const router = Router();

router.post("/add-phone", addPhone);
router.get("/", getPhones);
router.put("/edit-phone/:id", editPhone);

module.exports = router;
