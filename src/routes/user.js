const express = require("express");
const User = require("../controllers/user");
let router = express.Router();

router.post("/login/user", User.login);

router.post("/addUser", User.addUser);

router.post("/addProduct", Product.addProduct);

router.post("/getProduct", Product.getProduct);
