const mongooose = require('mongoose');
const  Schema=mongooose.Schema;
const userSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:false
    },
});

module.exports = mongooose.model("User", userSchema);