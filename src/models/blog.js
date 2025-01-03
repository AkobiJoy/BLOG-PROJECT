import mongoose from  "mongoose"

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    author:{
        type:String,
        required:true

    },
    category:{
        type:String,
        required:true
    },
    imageLink:{
        type:String,
        required:true
    }
}, {timestamps:true})  //checks the time

const blogModel=mongoose.models.blog  || mongoose.model("blog",blogSchema)
export default blogModel