const express = require("express");
const router = express.Router();

const { createNewUser } = require("../../controllers/users_api");
router.post("/create-new-user", createNewUser);

module.exports = router;
