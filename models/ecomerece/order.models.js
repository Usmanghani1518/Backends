import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
   productId:{ type:mongoose.Schema.Types.ObjectId,
    ref:"Product"},
    quntiaty:{
        type:Number,
        required:true,
    }


},{timestamps:true});

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"eUser"
    },
    orderItems:[itemSchema],
    adress:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"
    }
},{timestamps});

export const Order = mongoose.model("Order",orderSchema);
