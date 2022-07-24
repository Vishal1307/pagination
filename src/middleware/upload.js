
const { MulterError } = require('multer');
const multer=require('multer');
const express=require('express');



const storage=multer.diskStorage({
    destination:(req,file,cd)=>{
        cb(null,"./upload")

    },
    filename:(req,res,cb)=>{
        cb(null,Date.now())+" "+file.filename;

    }
})
const fileFilter=(req,file,cb)=>{
    if(file.mimeType=="image/png"|| file.mimeType=="image/jpeg"){
        cb(null,true)
    }
    else{
        cb(null,false)
    }

}
const upload=multer({
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize:1024*1024*5

    }
})

 const uploadSingle=(filename)=>{
    const uploadItem=upload.single(filename);
    uploadItem(req,res,(err)=>{
        if(err instanceof multer.MulterError){
            return res.send({message:err.message,errorType:"MulterError"})
        }
        else{
            return res.send({message:err.message,errorType:"Noramal error"})
        }
    })

}
const uploadMany=(filename)=>{
    const uploadItems=upload.array(filename)
    uploadItems(req,res,(err)=>{
        if(err instanceof multer.MulterError){
            return res.send({message:err.message,errorType:"MulterError"})

        }
        else{
            return res.send({message:err.message,errorType:"NormalError"})

        }
    })
}
module.exports ={
    uploadSingle,uploadMany
}
