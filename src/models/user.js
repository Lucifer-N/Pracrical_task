const mongoose = require("mongoose");
const Joi = require("joi");
const UserSchema = mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

function userValidation(User) {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });
  return Joi.validate(User, schema);
}

module.exports = { User: UserSchema, userValidation: userValidation };
