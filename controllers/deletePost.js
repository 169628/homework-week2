const mongoose = require("mongoose");
const response = require("../response");
const Post = require("../models/models");

const deleteOne = async (req,res, body)=>{
    const deteleData = await Post.deleteOne(JSON.parse(body));
    response.success(req,res,"delete one message",deteleData)
}

const deleteAll = async (req,res)=>{
    const posts = await Post.deleteMany({});
    response.success(req,res,"delete all message",posts)
}

module.exports = {deleteOne,deleteAll}