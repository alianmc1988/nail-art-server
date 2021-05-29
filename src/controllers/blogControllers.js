const Blog = require ('../models/blogModels');
const blogCtrl = {};



blogCtrl.getListBlogs = async (req, res)=>{
    try{
        const mongo = require('../../src/database/db');
        const blog = await Blog.find();
        mongo.disconnect(res=> console.log('DB Disconnected'));
        res.json({success:true,blog}).status(200);
    }catch(error){
        res.json({message:'DB is empty'}).status(404);
    }
}

blogCtrl.getSelectedBlog = async (req, res)=>{
    try {
        const mongo = require('../../src/database/db');
        const id = req.params.id;
        const blog = await Blog.findById(id);
        mongo.disconnect(res=> console.log('DB Disconnected'));
        res.json({success:true, blog}).status(200);
    }catch(error) {
        res.json({message:"no match"}).status(404)
    }
}

blogCtrl.createBlog = async (req, res)=>{
    try{
        const mongo = require('../../src/database/db');
        const blog = new Blog(req.body);
        await blog.save();
        mongo.disconnect(res=> console.log('DB Disconnected'));
        res.json({success:true}).status(200);
    }catch(error){
        res.json(error).status(404);
        
    }
}

blogCtrl.updateBlog = async (req, res)=>{

    const id = req.params.id;
    let blog = {
        _id:id,
        name:req.body.name,
        description:req.body.description,
        qualification: req.body.qualification,
        date:req.body.date
    }
    try{
        const mongo = require('../../src/database/db');
        await Blog.findByIdAndUpdate(id,{$set: service}, {new:true});
        mongo.disconnect(res=> console.log('DB Disconnected'));
        res.json({success:true, blog}).status(200);
    }catch(error){
        res.json({success:false}).status(404);
    }
}

blogCtrl.deleteBlog = async (req, res)=>{

    const id = req.params.id;
    try {
        const mongo = require('../../src/database/db');
        await Blog.findByIdAndRemove(id);
        mongo.disconnect(res=> console.log('DB Disconnected'));
        res.json({success:true}).status(200);
    }catch(error){
        res.json(error).status(404);
    }
}

module.exports = blogCtrl;