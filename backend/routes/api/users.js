const express = require("express");
const router = express.Router();
const passport = require("passport");

const userPresent = require("../../config/auth/userPresent");

const { createNewUser, userLogin } = require("../../controllers/users_api");

router.get(
  "/isAuthorized",
  userPresent,
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    return res.status(200).json({ j: "hello" });
  }
);
router.post("/create-new-user", createNewUser);
router.post("/login", userLogin);

module.exports = router;
