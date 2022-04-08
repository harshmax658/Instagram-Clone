const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    image:{
        type:String
    },
    desc:{
        type:String,
        max:500,
    },
    like:{
        type:Array,
        default:[]
    },
    comment:{
        type:Array,
        default:[]
    }
},{timestamps:true})

module.exports = mongoose.model("Post",PostSchema)