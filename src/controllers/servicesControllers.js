const Service = require ('../models/servicesModels');
const serviceCtrl = {};



serviceCtrl.getListServices = async (req, res)=>{
    try{
        const mongo = require('../../src/database/db');
        const services = await Service.find();
        mongo.disconnect(res=> console.log('DB Disconnected'))
        res.json({success:true,services}).status(200);
    }catch(error){
        res.json({message:'DB is empty'}).status(404);
    }
}

serviceCtrl.getSelectedService = async (req, res)=>{
    try {
        const mongo = require('../../src/database/db');
        const id = req.params.id;
        const service = await Service.findById(id);
        mongo.disconnect(res=> console.log('DB Disconnected'));
        res.json({success:true, service}).status(200);
    }catch(error) {
        res.json({message:"no match"}).status(404)
    }
}

serviceCtrl.createServices = async (req, res)=>{
    try{
        const mongo = require('../../src/database/db');
        const service = new Service(req.body);
        await service.save();
        mongo.disconnect(res=> console.log('DB Disconnected'));
        res.json({success:true}).status(200);
    }catch(error){
        res.json(error).status(404);
        
    }
}

serviceCtrl.updateServices = async (req, res)=>{

    const id = req.params.id;
    let service = {
        _id:id,
        service_name:req.body.service_name,
        description:req.body.description,
        price:req.body.price
    }
    try{
        const mongo = require('../../src/database/db');
        await Service.findByIdAndUpdate(id,{$set: service}, {new:true});
        mongo.disconnect(res=> console.log('DB Disconnected'));
        res.json({success:true, service}).status(200);
    }catch(error){
        res.json({success:false}).status(404);
    }
}

serviceCtrl.deleteServices = async (req, res)=>{

    const id = req.params.id;
    try {
        const mongo = require('../../src/database/db');
        await Service.findByIdAndRemove(id);
        mongo.disconnect(res=> console.log('DB Disconnected'));
        res.json({success:true}).status(200);
    }catch(error){
        res.json(error).status(404);
    }
}

module.exports = serviceCtrl;