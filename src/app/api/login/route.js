import adminModel from "@/models/admin"
import dbConnect from "@/utils/dbConnect"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export const POST = async (res) => {

    try {

        // takee icoming data
        const { email, password } = await res.json()
        // call databsse connection
        await dbConnect()
        // check if user email matches any in the databse
        const user = await adminModel.findOne({ email: email })
        if (!user) {
            return new NextResponse(JSON.stringify({ msg: "Invalid credentials" }), { status: 401 });

        }
        // get the hashed passsword stored in the db
        const hashedPassword = user.password
        // verify that hashed password matched the password from the user
        const passwordTrue = bcrypt.compareSync(password, hashedPassword)
        if (!passwordTrue) {
            return new NextResponse(JSON.stringify({ msg: "Invalid Credentials" }), { status: 401 });

        }
        return new NextResponse(JSON.stringify({ msg: "adminn  loggedIn" }), { status: 200 });
    }

    catch (error) {
        console.log(error.message)
        return new NextResponse(JSON.stringify({ msg: "Server Error" }), { status: 500 });

        
    }

}