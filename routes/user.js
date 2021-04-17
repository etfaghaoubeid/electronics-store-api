const { Router } = require("express");
const { register, getUsers } = require("../controllers/users");

const router = Router();

router.post("/register", register);
router.get("/", getUsers);
module.exports = router;
