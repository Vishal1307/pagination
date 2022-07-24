const app=require("..//index")
const connect=require("..//config/db")


app.listen(2345,async (req,res)=>{
    await connect()
    console.log("port is running")
})
