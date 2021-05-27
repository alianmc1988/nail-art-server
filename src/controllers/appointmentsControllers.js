const Appointment = require ('../models/servicesModels');

const appointmentCtrl = {};

appointmentCtrl.getListAppointment = async (req, res)=>{
    try{
        const appointments = await Appointment.find();        
        res.json({success:true,appointments}).status(200);
    }catch(error){
        res.json({message:'DB is empty'}).status(404);
    }
}

appointmentCtrl.getSelectedAppointment = async (req, res)=>{
    try {
        const id = req.params.id;
        const appointment = await Appointment.findById(id);
        res.json({success:true, appointment}).status(200);
    } catch (error) {
        res.json({message:"no match"}).status(404)
    }
}

appointmentCtrl.createAppointment = async (req, res)=>{
    try{
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.json({success:true}).status(200);
    }catch(error){
        res.json(error).status(404);
        
    }
}

appointmentCtrl.updateAppointment = async (req, res)=>{

    const id = req.params.id;
    let appointment = {
        _id:id,
        name:req.body.service_name,
        service_id:req.body.description,
        price:req.body.price,
        appoinment:req.body.price.date
    }
    try{
        await Appointment.findByIdAndUpdate(id,{$set: appointment}, {new:true});
        res.json({success:true, appointment}).status(200);
    }catch(error){
        res.json({success:false}).status(404);
    }
}

appointmentCtrl.deleteAppointment = async (req, res)=>{

    const id = req.params.id;
    try {
        await Appointment.findByIdAndRemove(id);
        res.json({success:true}).status(200);
    } catch (error) {
        res.json(error).status(404);
    }
}

module.exports = appointmentCtrl;