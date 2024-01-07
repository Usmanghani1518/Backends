import mongoose from "mongoose";

const ecomUser= new mongoose.Schema({
  userName:{
    type:String,
    required:true,
    unique: true,
    lowercase:true
  },
  email:{
    type: String,
    required:[true,"email must be required"],
    unique: true,
    lowercase:true
  },
  pasword:{
    type:String,
    required:true,
    minLength:6
  }

},{timestamps:true});

export const eUser =mongoose.model("eUser",ecomUser);