const Post  = require("../models/Post");
const router = require("express").Router();
// const path = require("path");


//creating post
router.post('/',async(req,res) => {
   try{
     const newPost = new Post({
         ...req.body,
     });
     const savedPost = await newPost.save();
     res.status(200).json(savedPost)
   }catch(error){
       res.status(500).json(error)
   }
})


//updating post
router.put("/:id",async(req,res) => {
    try{
    const post  = await Post.findById(req.params.id)
    if(post.userId == req.body.id){
        await post.updateOne({$set:req.body});
        res.status(200).json("the post has been updated");
    }
    }catch(error){
        res.status(500).json(error)
    }
})

//for deleting post
router.delete("/:id",async(req,res) => {
    try {
        const post = await Post.findById(req.params.id)
    if(post.userId == req.body.id){  
        await  post.deleteOne();
        res.status(200).json("the post is deleted");
    }
    } catch (error) {
        res.status(500).json(error)
    }
})
