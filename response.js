const headers = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
    'Content-Type': 'application/json'
}

const response ={
    success: function(req,res,item,posts){
        res.writeHead(200,headers);
        let successRes = {
            "method":req.method,
            "status":"success"
        }
        successRes[item]=posts  //如果用{item:posts}, item會被當成是key
        res.write(JSON.stringify(successRes));
        res.end();
    },
    false: function(req,res,code,message){
        res.writeHead(code,headers);
        res.write(JSON.stringify({
            "method":req.method,
            "status":"false",
            "message":message
        }));
        res.end();
    }
    
    
}



module.exports=response;