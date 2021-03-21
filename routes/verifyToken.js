const jwt = require('jsonwebtoken')

module.exports=function (req,res,next){
    const token = req.header('auth_token')

    if(!token) return res.send("Access Denied")

    try{
        const verified= jwt.verify(token, process.env.TOKEN)
        req.player = verified;
        next();

    }catch(err){

        res.send("Invalid Token")

    }
}