import { connectDB } from "@/db/connectDB";
import userModel from "@/db/models/users";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("userId");
  const headerList = headers();
  const currUserId = headerList.get("id");
  console.log("currUserId", currUserId);

  if (!id) {
    return NextResponse.json(
      { msg: "error", data: "user unauthorized" },
      { status: 401 }
    );
  }

  try {
    await connectDB();

    const data = await userModel.findOne({ _id: currUserId });

    if (!data) {
      return NextResponse.json(
        { msg: "failed", data: "user not found" },
        { status: 404 }
      );
    }

    // destacture data
    const { _id, name, designation, address, email, mobile, image } = data;

    return NextResponse.json(
      {
        msg: "success",
        data: {
          _id,
          name,
          designation,
          address,
          email,
          mobile,
          image,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ msg: "error", error }, { status: 500 });
  }
}
