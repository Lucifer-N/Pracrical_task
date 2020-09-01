const { User, userValidation } = require("./user");
const { Product } = require("./product");

module.exports = {
  userValidation: userValidation,
  User: mongoose.model("User", User),
  Product: mongoose.model("Product", Product),
};
