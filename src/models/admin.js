
import mongoose from "mongoose";

 const adminSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            trim:true
        },
        lastName:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            trim:true,
            unique:true
        },
        gender:{
            type:String,
            required:true,
            enum:["M","F"]
        },
        password:{
            type:String,
            required:true,
           
        },
        

    }
 )
const adminModel= mongoose.models.admin || mongoose.model("admin",adminSchema)
 export default adminModel
