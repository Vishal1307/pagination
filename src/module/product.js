const mongoose= require('mongoose')
const productSchem=new mongoose.Schema({
    item:{type:String,required:true},
    image_url:{type:String,required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
})
module.exports =mongoose.model('Product',productSchem)