const express = require("express");
const router = express.Router();
const passport = require("passport");

const userPresent = require("../../config/auth/userPresent");

const {
  createNewUser,
  userLogin,
  sendUserJwt,
  getUserDetails,
} = require("../../controllers/users_api");

router.get(
  "/isAuthorized",
  userPresent,
  passport.authenticate("jwt", { session: false }),
  sendUserJwt
);
router.get(
  "/get-user-data",
  passport.authenticate("jwt", { session: false }),
  getUserDetails
);
router.post("/create-new-user", createNewUser);
router.post("/login", userLogin);

module.exports = router;
