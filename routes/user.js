const { Router } = require("express");
const { register, getUsers, tes } = require("../controllers/users");

const router = Router();

router.post("/register", register);
router.get("/", getUsers);
router.get("/test", tes);
module.exports = router;
