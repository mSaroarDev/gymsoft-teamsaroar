import { connectDB } from "@/db/connectDB";
import userModel from "@/db/models/users";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req, res) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("userId");

  try {
    await connectDB();

    const data = await userModel.findByIdAndDelete({ _id: id });

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
