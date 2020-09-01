const express = require("express");
const Product = require("../controllers/product");
let router = express.Router();

router.post("/addProduct", Product.addProduct);

router.post("/getProduct", Product.getProduct);
