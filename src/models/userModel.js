var mongoose = require ('mongoose');
var {Schema} = mongoose;
var bcrypt = require ('bcrypt');

const UserSchema = new Schema ({
    email:{type:String, require:true, unique:true},
    password:{type:String, require:true}
});

UserSchema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password, 10);
};

UserSchema.methods.isValid = (hashedpassword)=>{
    return bcrypt.compareSync (hashedpassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);