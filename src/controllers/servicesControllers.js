const Service = require ('../models/servicesModels');

const serviceCtrl = {};


serviceCtrl.getListServices = async (req, res)=>{
    try{
    
        
        const services = await Service.find();
        res.json(services).status(200);
        
    }catch(error){
        res.json({message:'DB is empty'},error).status(404);
    }
}

serviceCtrl.getSelectedService = async (req, res)=>{
    try {
        
        const id = req.params.id;
        const service = await Service.findById(id);
        res.json({success:true, service}).status(200);
    }catch(error) {
        res.json({message:"no match"}).status(404)
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

serviceCtrl.updateServices = async (req, res)=>{

    const id = req.params.id;
    let service = {
        _id:req.body._id,
        service_name:req.body.service_name,
        description:req.body.description,
        price:req.body.price
    }
    console.log(service)
    try{
       const a = await Service.findOneAndUpdate ({_id:id},{$set: service}, {new: true});
       //console.log(a)
        res.json({success:true, service}).status(200);
    }catch(error){
        res.json({success:false}).status(404);
    }
}

serviceCtrl.deleteServices = async (req, res)=>{

    const id = req.params.id;
    try {
        console.log(id);
        await Service.findOneAndRemove({_id:id});
        res.json({success:true}).status(200);
    }catch(error){
        res.json(error).status(404);
    }
}

module.exports = serviceCtrl;