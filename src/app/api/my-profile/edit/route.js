import { connectDB } from "@/db/connectDB";
import userModel from "@/db/models/users";
import { NextResponse } from "next/server";

export async function PATCH(req, res) {
  const formData = await req.json();
  const { name, designation, address, mobile, email, image } = formData;
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("userId");

  try {
    await connectDB();

    const updatedData = await userModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: name,
          designation: designation,
          address: address,
          mobile: mobile,
          email: email,
          image: image,
        },
      },
      { new: true }
    );

    return NextResponse.json(
      {
        msg: "success",
        data: {
          _id: id,
          name: updatedData.name,
          designation: updatedData.designation,
          address: updatedData.address,
          email: updatedData.email,
          mobile: updatedData.mobile,
          image: updatedData.image,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ msg: "error", error }, { status: 500 });
  }
}
