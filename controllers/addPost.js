const mongoose = require("mongoose");
const response = require("../response");
const Post = require("../models/models");

const addPost = async (req,res, body)=>{
    try{
        const newPost = await Post.create(JSON.parse(body));
        response.success(req,res,"add post",newPost)
    }catch(err){
        console.log(err.errors)
        response.false(req,res,400,"請依格式填寫完整")
    }
}

module.exports = addPost;