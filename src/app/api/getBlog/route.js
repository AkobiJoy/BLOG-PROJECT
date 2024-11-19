import blogModel from "@/models/blog"
import { NextResponse } from "next/server";

export const GET=async ()=>{
    const blog= await blogModel.find();
    return new NextResponse(JSON.stringify(blog, {status:200}))
}