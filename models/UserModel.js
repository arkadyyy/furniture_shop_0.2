const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    isAdmin: { type: Boolean, required: true, default: false },
    username: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
