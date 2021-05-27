const mongoose  = require ('mongoose');

const {Schema} = mongoose;
const ServiceSchema = new Schema ({
    
        service_name: { type: String, require: true },    
        description: { type:String, require: true },  
        price: { type:Number,require: true },
        appoinment: {type:Date}
        
    }
);
 
module.exports = mongoose.model ('User', ServiceSchema);
