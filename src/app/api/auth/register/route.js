import userModel from "@/db/models/users";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectDB } from "@/db/connectDB";

export async function POST(req, res) {
  const formdata = await req.json();
  const { email, password } = formdata;

  try {
    await connectDB();

    const existingData = await userModel.find({ email });
    if (existingData.length > 0) {
      return NextResponse.json(
        { msg: "failed", data: "user already exist" },
        { status: 409 }
      );
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newData = new userModel({
      ...formdata,
      password: hashedPassword,
    });

    const data = await newData.save();

    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ msg: "error", error }, { status: 500 });
  }
}
