import mongoose from "mongoose";

const userSchema =new mongoose.Schema(
    {
    userName:{
        type:String,
        required:true,
        unique:true,
        trim: true , 
        lowercase:true
    },
    password:{
        type: String,
        required:true,
        minLength:6,

    },
    email:{
        type:String,
        required:true,
        unique:true,

    }
    },{timestamps:true}
    );


export const User = mongoose.model("user",userSchema);




import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
    {
        Got:{
            type:Number,
            required:true,
            default:0
        },
        Gave:{
            type:Number,
            default:0,
            required:true,
        }
    }
    );

export const Customer = mongoose.model("Customer",customerSchema);