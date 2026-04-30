const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    require: [true, "User is required"],
    unique: [true, "User must be unique"],
  },

  Email: {
    type: String,
    require: [true, "Email is required"],
    unique: [true, " Email must be unique"],
  },

  password: {
    type: String,
    require: [true, "Password is required"],
    unique: [true, "Password must be unique"],
  },
});

const userModel = new mongoose.model("Users", userSchema);

module.exports = userModel;
