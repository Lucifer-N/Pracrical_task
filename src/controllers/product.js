let { Product } = require("../models");
const { v4: uuidv4 } = require("uuid");
exports.addProduct = async (req, res) => {
  let product = await Product.findOne({
    SRC: req.body.SRC,
  });
  if (product)
    return res.json({
      message: "Product Already Exist...",
    });
  product = new Product({
    name: req.body.name,
    SKU: uuidv4(),
    price: req.body.price,
    category: req.body.category,
    quantity: req.body.quantity,
  });
  await product.save((err) => {
    if (err) return res.send({ message: "Product not added" });
    else
      res.json({
        message: "Product added sucessfully",
      });
  });
};

exports.update = async (req, res) => {
  const product = await Product.findOne({
    SRC: req.body.src,
  });
  product.name = req.body.name;
  await product.save();
  res.send({ message: "password updated successfully" });
};

exports.getProduct = async (req, res) => {
  let products = await Product.find();

  res.send({ product: products });
};
