const User = require ('../models/userModel');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
var keys = require ('../common/environmentKey/environmentKeys');
const UserCtrl = {};

UserCtrl.getListUsers = async (req, res)=>{
    try{
        const users = await User.find();
        return res.json(users).status(200);
        
    }catch(error){
        return res.json({message:'DB is empty'},error).status(404);
    }
}

UserCtrl.createUser = async (req, res)=>{
    
    const user = new User({
        email:req.body.email,
        password: User.hashPassword(req.body.password)
    });
    try{
        await user.save();
        return res.json({success:true}).status(200);
    }catch(error){
        return res.json(error).status(404);
        
    }
}

UserCtrl.login = async (req,res)=> {
  email = req.body.email;
  password = req.body.password;
  
  findedUser = await User.findOne({email});
  if (findedUser === null || findedUser === undefined){
   return res.status(404).json({success:false, message:'No User found'});
  }
  if(!bcrypt.compareSync(password, findedUser.password)){
    return res.status(403).json({success:false, message:'Password Error'});
  }else{
    return res.status(200).json({success:true, message:'Logged successfuly', token: jwt.sign({name:findedUser._id},keys.tokenKey)})
  }
    
}



module.exports = UserCtrl;