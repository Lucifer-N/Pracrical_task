let { Product } = require("../models");

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
    SKU: req.body.sku,
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

exports.getProduct = async (req, res) => {
  let products = await Product.find();

  res.send({ data: products });
};
