const User = require ('../models/userModel');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
var keys = require ('../common/environmentKey/environmentKeys');
const { isValidObjectId } = require('mongoose');
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
    const listaUser = await User.find();
    console.log(listaUser)
    if(listaUser.lenth == 0){
        const user = new User({
            email:req.body.email,
            password: User.hashPassword(req.body.password)
        });
        try{
            await user.save();
            return res.status(200).json({success:true});
        }catch(error){
            return res.status(404).json(error);
            
        }
    }else{
       return res.status(403).json('Ya existe un usuario en bd');
    }
   
}

UserCtrl.login = async (req,res)=> {
  email = req.body.email;
  password = req.body.password;
  
  findedUser = await User.findOne({email});
  if (!findedUser){
   return res.status(404).json({success:false, message:'No User found'});
  }
  if(!bcrypt.compareSync(password, findedUser.password)){
    return res.status(403).json({success:false, message:'Password Error'});
  }else{
    return res.status(200).json({success:true, message:'Logged successfuly', token: jwt.sign({name:findedUser._id},keys.tokenKey)})
  }
    
}

UserCtrl.edit = async (req,res)=> {
    let email = req.params.email;
    let user_to_edit = {
        email: req.body.email,
        password: User.hashPassword(req.body.password)
    }
    let user_found = await User.findOne({email});
    try{
        await User.findByIdAndUpdate(user_found._id,{$set: user_to_edit}, {new:true})
        return res.status(201).json('User updated successfuly');
    }catch (err){
        return res.status(404).json("Sorry something went wrong")
    }
    
    
}



module.exports = UserCtrl;