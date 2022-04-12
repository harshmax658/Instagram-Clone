const express = require("express");
const router = express.Router();

const users = require("./Users");
const post = require("./post");

<<<<<<< HEAD
router.use("/user", user);
router.use("/post", post);
=======
router.use("/user", users);
router.use("/post", users);
>>>>>>> 023665faff6329e3efd29e34c2d47650b1cf8276

module.exports = router;
