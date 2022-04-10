const express = require("express");
const router = express.Router();
const { createPost } = require("../../controllers/post_api");

router.post("/create-post", createPost);
module.exports = router;
