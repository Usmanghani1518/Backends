import mongoose from "mongoose";

const product = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Catageroy",
        required:true
    },
    productImage:{
        type:String
    },
    price:{
        type:Number,
        default:0,
        required:true
    },
    stock:{
        type:Number,
        default:0
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"eUser",
        required:true
    }


},{timestamps:true});

export const Product = mongoose.model("Product",product);
