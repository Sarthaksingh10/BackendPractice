const mongoose = require("mongoose");

//Creating a schema for the mongoose
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    JobTitle: {
      type: String,
    },
    Gender: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Creating a user with the help of mongoose model
const User = mongoose.model("user", UserSchema);

module.exports = User;
