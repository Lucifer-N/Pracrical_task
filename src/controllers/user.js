let { User } = require("../models");
const config = require("config");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });
  if (!user) {
    return res.send("Invalid credentials...");
  } else {
    if (req.body.password === user.password) {
      let token = await jwt.sign(
        { email: req.body.email, password: req.body.password },
        config.get("TOKEN")
      );
      res.send({
        message: "Sucessfully logged in ...",
        user: { mobile: user.email, name: user.name, _id: user._id },
        token,
      });
    } else return res.send({ message: "incorrect password" });
  }
};

exports.addUser = async (req, res) => {
  let { error } = await userValidation(req.body);
  if (error) {
    return res.send("Error", error.details[0].message);
  }
  let user = await User.findOne({
    email: req.body.email,
  });
  if (user)
    return res.json({
      message: "User Already Exist...",
    });
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  await user.save((err) => {
    if (err) return res.send({ message: "User not created" });
    else
      res.json({
        message: "User added sucessfully",
      });
  });
};
