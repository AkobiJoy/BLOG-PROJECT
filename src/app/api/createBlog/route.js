import blogModel from "@/models/blog"
import dbConnect from "@/utils/dbConnect"
import { NextResponse } from "next/server"

export const POST=async (res)=>{
    //    call database connection
    const {title,category,author,media,body}=await res.json()
    try {
    await dbConnect()
    // create the blog post
    const blog=new blogModel({title,category,author,imageLink:media,body})
    await blog.save()
    if(!blog){
        return new NextResponse(JSON.stringify({msg:"something went wrong"}, {status:400}))

    }
    console.log("blog created")
    return new NextResponse(JSON.stringify({msg:"Blog created"}, {status:201}))




} catch (error) {
console.log(error.message)
return new NextResponse(JSON.stringify({msg:"something went wrong"}, {status:500}))

}
}