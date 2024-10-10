import { connectDB } from "@/db/connectDB";
import userModel from "@/db/models/users";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await connectDB();

    const data = await userModel.find().sort({ _id: -1 });
    return NextResponse.json(
      {
        msg: "success",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ msg: "error", error }, { status: 500 });
  }
}
