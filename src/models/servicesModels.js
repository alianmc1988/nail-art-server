const mongoose  = require ('mongoose');

const {Schema} = mongoose;
const ServiceSchema = new Schema ({
    
        service_name: { type: String, require: true },    
        description: { type:String, require: true },
        pictureService: {type:String},
        price: { type:Number,require: true }
    }
);
 
module.exports = mongoose.model ('Service', ServiceSchema);
