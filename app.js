
//連接資料庫
require("./connections");

const response = require("./response");
const Post = require("./models/models");

//controllers
const getPost = require("./controllers/getPost")
const addPost = require("./controllers/addPost")
const deletePost = require("./controllers/deletePost")
const updateById = require("./controllers/update")

const app = async (req,res)=>{
    let body = "";
    req.on("data",(chunk)=>{
        body += chunk;
    })
    if (req.url === "/posts" && req.method === "GET"){
        getPost(req,res);
    }else if (req.url === "/posts" && req.method === "POST"){
        req.on("end",async ()=>{
            addPost(req,res,body);
        })
    }else if (req.url === "/posts" && req.method === "DELETE"){
        req.on("end",async ()=>{
            if(body === ""){
                deletePost.deleteAll(req,res);
            }else{
                deletePost.deleteOne(req,res,body);
            }
        })
    }else if (req.url.startsWith("/posts/") && req.method === "PATCH"){
        req.on("end",async ()=>{
            updateById(req,res,body);
        })
    }else if (req.method === "OPTIONS"){
        response.success(req,res)
    }else{
        response.false(req,res,404,"無此路由")
    }
}

//伺服器on
module.exports = app;