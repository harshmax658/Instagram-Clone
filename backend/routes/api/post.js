const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const { createPost , updatePost , deletePost } = require("../../controllers/post_api");
const multer =  require("multer");
const path  = require('path')

const storage  = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'../../Images'))
    },
    filename:(req,file,cb) => {
        console.log(file);
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({storage:storage})

router.post("/create-post", upload.single("post") ,createPost);
router.post("/update-post/:id" , updatePost);
router.post("/delete-post/:id" , deletePost);

=======
const {
  createPost,
  updatePost,
  deletePost,
} = require("../../controllers/post_api");

router.post("/create-post", createPost);
router.post("/update-post/:id", updatePost);
router.post("/delete-post/:id", deletePost);
>>>>>>> 023665faff6329e3efd29e34c2d47650b1cf8276

module.exports = router;
