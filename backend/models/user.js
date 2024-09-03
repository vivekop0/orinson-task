const mongoose = require("mongoose");
const { string } = require("zod");


const user = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique:true,
    },
    number:{
        type: String,
        required:true,
       
    },
    requirement:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true,
    }
})

const Usermodel = mongoose.model('Users',user);

module.exports = Usermodel;