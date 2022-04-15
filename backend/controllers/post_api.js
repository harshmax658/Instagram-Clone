const Post = require("../models/Post");
const router = require("express").Router();

//creating post
const createPost = async (req, res) => {
      
  //     const url = req.protocol + '://' + req.get('host')
  //     let pimage = url + '/images/' + req.file.filename

  // try {
  //   const newPost = new Post({
  //     ...req.body,image:pimage
  //   });

  //   const savedPost = await newPost.save();
  //   res.status(200).json(savedPost);
  // } catch (error) {
  //   res.status(500).json({
  //     message: "Internal server error",
  //     error,
  //   });
  // }
};



//updating post
const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId == req.body.id) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("the post has been updated");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//for deleting post
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId == req.body.id) {
      await post.deleteOne();
      res.status(200).json("the post is deleted");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createPost, updatePost, deletePost };
