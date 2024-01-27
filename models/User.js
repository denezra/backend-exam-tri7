const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  created_at: { type: String, required: true },
});

const User = mongoose.model("User", userSchema, "user");

module.exports = User;
