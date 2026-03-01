import mongoose from "mongoose"
import express from "express"



const app = express();


(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on(
            "error",(err)=>{
                console.error("error:",err);
                throw err;
            }
        )

        app.listen(process.env.PORT || 3000,()=>{
            console.log
        })
    }catch(err){
        console.error("error:",err);
        throw err;
    }
})()