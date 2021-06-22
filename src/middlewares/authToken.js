const jwt = require ('jsonwebtoken');
const User = require ('../models/userModel')
var keys = require ('../common/environmentKey/environmentKeys')

var theKey = keys.tokenKey;

const TokenConf = {};

TokenConf.generateToken = async (req,res)=>{
    var theUser = await User.findOne({email},req.body.email);
    var theToken = jwt.sign({email:theUser.email},theKey)
    return res.json(theToken);
    }

TokenConf.isValid = (req,res,next)=>{
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
    
}

module.exports = TokenConf;