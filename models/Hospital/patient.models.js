import mongoose from "mongoose";
 
const patientSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true,
   },
   diagonsedWith:{
    name:String,
    required:true,
   },
   address:{
    type:String,
    required:true
   },
   age:{
    type:Number,
    required:true,
   },
   blood_Group:{
    type:String,
    required:true
   },
   gender:{
    type:String,
    enum:["M","F","O"],
    required:true
   },
   admitted_In:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
   }



    
},{timestamps:true});

export const Patient = mongoose.model("Patient",patientSchema);
