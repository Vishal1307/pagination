const express=require('express');
const User=require("..//module/user")
const router=express.Router();

router.post("",async (req,res)=>{
    try{
        const user=await User.create(req.body)
        return res.status(200).send(user);

    }
    catch(err){
        return res.status(400).send({message: err.message});
    }
})
router.get("",async (req,res)=>{
    try{
        const user=await User.find().populate({path:"user_id",serch:{email:1}}).lean().exec()
        return res.status(200).send(user);

    }
    catch(err){
        return res.status(400).send({message: err.message});
    }
})
module.exports =router