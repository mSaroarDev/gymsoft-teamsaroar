import { connectDB } from "@/db/connectDB";
import userModel from "@/db/models/users";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PATCH(req, res) {
  const formData = await req.json();
  const { name, designation, address, mobile, email, image, role } = formData;
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("userId");

  try {
    await connectDB();

    const data = await userModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: name,
          designation: designation,
          address: address,
          mobile: mobile,
          email: email,
          image: image,
          role: role,
        },
      },
      { new: true }
    );

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
