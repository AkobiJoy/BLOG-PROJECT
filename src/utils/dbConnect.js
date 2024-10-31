import mongoose from "mongoose";

export default async function dbConnect (){
    try{
         // all mongoose operations returns a promise
    const connect = await mongoose.connect(process.env.MONGO_URL)
    if(connect){
        console.log("Db connected")
        return connect
    }
    }
    catch(err){
        console.log(err.message)
    }
   



}