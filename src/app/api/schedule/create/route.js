import { NextResponse } from "next/server";
import { connectDB } from "@/db/connectDB";
import scheduleModel from "@/db/models/schedule";

export const dynamic = "force-dynamic";

export async function POST(req, res) {
  const formdata = await req.json();
  console.log("formdata", formdata);

  try {
    await connectDB();

    const newData = new scheduleModel({
      ...formdata,
    });

    const data = await newData.save();

    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ msg: "error", error }, { status: 500 });
  }
}
