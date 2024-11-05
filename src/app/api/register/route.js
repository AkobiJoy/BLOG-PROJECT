import adminModel from "@/models/admin"
import dbConnect from "@/utils/dbConnect"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export const POST = async (res) => {
    try {

        // take incoming values
        const { firstName, lastName, email, gender, password } = await res.json()
        // prevent user from registerign with teh same email
        const adminExists = await adminModel.findOne({ email: email })
        if (adminExists) {
            return new NextResponse(JSON.stringify({ msg: "admin  already exists" }), { status: 200 });

        }
       
        // call database connection
        await dbConnect()
        //   hash admin password
        const salt = bcrypt.genSaltSync(16)
        const hashedPassword = bcrypt.hashSync(password, salt)

        //   store values in the Database
        const admin = new adminModel({ firstName, lastName, email, gender, password: hashedPassword })
        await admin.save()
        if (!admin) {
            return new NextResponse(JSON.stringify({ msg: "adminn not created" }), { status: 400 });

        }
        return new NextResponse(JSON.stringify({ msg: "adminn  created" }), { status: 201 });
    }

    catch (error) {
        console.log(error.message)
        return new NextResponse(JSON.stringify({ msg: "Server Error" }), { status: 500 });

    }

}
