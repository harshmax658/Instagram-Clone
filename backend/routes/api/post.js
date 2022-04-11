const express = require("express");
const router = express.Router();
const {
  createPost,
  updatePost,
  deletePost,
} = require("../../controllers/post_api");

router.post("/create-post", createPost);
router.post("/update-post/:id", updatePost);
router.post("/delete-post/:id", deletePost);

module.exports = router;
