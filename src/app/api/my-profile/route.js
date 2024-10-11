import { connectDB } from "@/db/connectDB";
import userModel from "@/db/models/users";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("userId");

  try {
    await connectDB();

    const data = await userModel.findOne({ _id: id });

    if (!data) {
      return NextResponse.json(
        { msg: "failed", data: "user not found" },
        { status: 404 }
      );
    }

    // destacture data
    const { _id, name, designation, address, email, mobile, image, role } =
      data;

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
          role,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ msg: "error", error }, { status: 500 });
  }
}
