const Service = require ('../models/servicesModels');

const serviceCtrl = {};

serviceCtrl.getListServices = async (req, res)=>{
    try{
        const services = await Service.find();
        res.json({success:true,services}).status(200);
    }catch(error){
        res.json(error).status(404);
    }
}

serviceCtrl.getSelectedService = async (req , res)=>{
    try {
        const id = req.params.id;
        const service = await Service.findById(id);
        res.json({success:true, service}).status(200);
        
    } catch (error) {
        
        res.json(error).status(404);
    }
}

serviceCtrl.createServices = async (req, res)=>{
    try{
        const service = new Service(req.body);
        await service.save();
        res.json({success:true}).status(200);
    }catch(error){
        res.json(error).status(404);
    }
}

module.exports = serviceCtrl;