const mongoose  = require ('mongoose');

const {Schema} = mongoose;
const BlogSchema = new Schema ({
    
        name: { type: String, require: true },    
        description: { type:String, require: true },  
        qualification:{type:Number, require: true },
        date: { type:Date }
    }
);
 
module.exports = mongoose.model ('Blog', BlogSchema);
