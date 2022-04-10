const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    emailOrMobile: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    fullName: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png",
    },
    day: {
      type: Number,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    city: {
      type: String,
      max: 20,
    },
    desc: {
      type: String,
      max: 50,
    },
  },
  { timestamps: true }
);

userSchema.statics.generateToken = (data, key, exprire = "10d") => {
  return jwt.sign(data.toJSON(), key, { expiresIn: exprire });
};
const User = mongoose.model("User", userSchema);
module.exports = User;
