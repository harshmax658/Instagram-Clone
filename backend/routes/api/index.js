const express = require("express");
const router = express.Router();

const user = require("./users");
const post = require("./post");

router.use("/user", user);
router.use("/post", user);

module.exports = router;
