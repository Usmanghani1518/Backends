import mongoose  from "mongoose";

const catageroy = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique: true
    }
},{timestamps:true});

export const Catageroy = mongoose.model("Catageroy",catageroy);