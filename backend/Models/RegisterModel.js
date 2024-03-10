import mongoose from "mongoose";

const schema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});
const registerModel=mongoose.model("RegisterModel",schema);

export default registerModel;