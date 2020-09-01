const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
  name: String,
  SKU: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
});

module.exports = { User: ProductSchema };
