const express = require('express')
const Product= require("..//module/product")
const router=express.Router()

router.post("",async (req,res)=>{

    try{
        const product=await Product.create(req.body)
        return res.status(200).send(product)

    }
    catch(err){
        return res.status(400).send({messages:err.messages})
    }
})
router.get("",async (req,res)=>{

    try{
        const page=+req.query.page||1
        const size=+req.query.size||2
        const serch=req.query.serch
        const skip=(page-1)*size
        if(!serch){
            const product=await Product.find().skip(skip).limit(size).lean().exec()
            const totaItem=await Product.find().countDocuments()
            const totalPage=Math.ceil(totaItem/size)
            return res.status(200).send({product:product, totalPage:totalPage,totaItem:totaItem})
    
        }
        else{
            const product=await Product.find({item:serch}).skip(skip).limit(size).lean().exec()
            const totaItem=await Product.find().countDocuments()
            const totalPage=Math.ceil(totaItem/size)
            return res.status(200).send({product:product, totalPage:totalPage,totaItem:totaItem})


        }

    }
    catch(err){
        return res.status(400).send({messages:err.messages})
    }
})
router.get("/:id",async (req, res) => {
    try{
        const product=await Product.findById(req.params.id).lean().exec()
        return res.status(200).send(product)

    }
    catch(err) {
        return res.status(400).send({messages:err.messages})
    }
})
router.delete("/:id",async (req, res) => {
    try{
        const product=await Product.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send(product)

    }
    catch(err) {
        return res.status(400).send({messages:err.messages})
    }
})
router.patch("/:id",async (req, res) => {
    try{
        const product =await Product.findByIdAndUpdate(req.params.id, req.body).lean().exec()
        return res.status(200).send({product:product})

    }
    catch(err){
        return res.status(400).send({messages:err.messages})
    }
})
router.put("/:id",async (req, res) => {
    try{
        const product =await Product.findByIdAndUpdate(req.params.id, req.body).lean().exec()
        return res.status(200).send({product:product})

    }
    catch(err){
        return res.status(400).send({messages:err.messages})
    }
})
module.exports =router