const mongoose = require("mongoose");
const response = require("../response");
const Post = require("../models/models");

const update = async (req,res, body)=>{
    try{
        let id = req.url.split("/").pop();
        const newPost = await Post.findByIdAndUpdate(id,JSON.parse(body));
        response.success(req,res,"old post",newPost)
    }catch(err){
        console.log(err.errors)
        response.false(req,res,400,"內容不正確，請依格式填寫完整")
    }
}

module.exports = update;