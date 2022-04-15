const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const Avatar_path = path.join("/uploads/user/avatar");

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
      select: false,
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
      // https://instagram.fcgk1-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fcgk1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=zVDTFO-0v-UAX92JASS&edm=ALlQn9MBAAAA&ccb=7-4&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4&oh=00_AT-83XNhFkLLOFtAkzJsujWOKdM6ar2ZTJteXXM1T-6h6g&oe=6260154F&_nc_sid=48a2a6
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
    post: {
      type: Array,
      default: [],
    },
    desc: {
      type: String,
      max: 50,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.statics.generateToken = (data, key, exprire = "10d") => {
  return `Bearer ${jwt.sign(data.toJSON(), key, { expiresIn: exprire })}`;
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", Avatar_path));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

userSchema.statics.uploadAvatar = multer({ storage: storage }).single("avatar");
userSchema.statics.avatarPath = Avatar_path;

const User = mongoose.model("User", userSchema);
module.exports = User;
