const express=require("express")
const app=express()
const user=require("./moduleControll/userControl")
const product=require("./moduleControll/productControl")

app.use(express.json())
app.use("/users",user)
app.use("/products",product)


module.exports =app

