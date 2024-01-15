import mongoose from "mongoose";
// import { Database } from "./constant";
import Databases from "./db/database";



Databases()







/*
import  Express  from "express";

const app = Express();

;( async ()=>{

    try {
        await mongoose.connect(`${process.env.DATABASE_URI}/${Database}`);
        app.on("error",(error)=>{
            console.log('Error:', error);
            throw error;
        });
        app.listen(process.env.PORT,()=>{
            console.log("app is running of prot " + process.env.PORT)
        })
    } catch (error) {
        console.error("the error is " + error);
    }
})()
*/
