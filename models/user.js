import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Please Enter Your Name"],
    },
    email:{
        type:String,
        unique : true,
        required:true,
    },
    password:{
        type:String,
        select:false,
    },
    createdAt:{
        type:Date,
        default:new Date(),
    }
});

export const User = mongoose.model("User",schema);