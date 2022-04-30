const mongoose = require("mongoose");
const response = require("../response");
const Post = require("../models/models");

const get = async (req,res)=>{
    const posts = await Post.find();
    response.success(req,res,"posts",posts)
}

module.exports = get;