const mongoose = require('mongoose');
const userSchem=new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true}

})
module.exports =mongoose.model("user",userSchem)