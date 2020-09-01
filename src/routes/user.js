const express = require("express");
const User = require("../controllers/user");
let router = express.Router();

router.post("/login", User.login);

router.post("/addUser", User.addUser);

module.exports = router;
