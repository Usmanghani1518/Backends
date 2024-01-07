import mongoose from "mongoose";

const medicalSchema = new mongoose.Schema({

    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient",
        required:true
    },
    test:{
        type:String,
        
    },
    medicine:{
        type:String,
        required:true
    },
    dosage:{
        type:String,
        required:true
    },
    treatmetBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
        required:true
    }
    
},{timestamps:true});

export const Medical = mongoose.model("Medical",medicalSchema);
