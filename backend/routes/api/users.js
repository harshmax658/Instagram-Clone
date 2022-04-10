const express = require("express");
const router = express.Router();

const { createNewUser, userLogin } = require("../../controllers/users_api");
router.post("/create-new-user", createNewUser);
router.post("/login", userLogin);

module.exports = router;
