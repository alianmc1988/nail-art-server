const mongoose  = require ('mongoose');

const {Schema} = mongoose;
const AppointmentSchema = new Schema ({
    
        name: { type: String, require: true },    
        service_id: { type:String, require: true },  
        price: { type:Number,require: true },
        appoinment: {type:Date}
        
    }
);
 
module.exports = mongoose.model ('User', AppointmentSchema);