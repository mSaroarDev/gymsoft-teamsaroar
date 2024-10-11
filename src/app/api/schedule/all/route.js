import { NextResponse } from "next/server";
import { connectDB } from "@/db/connectDB";
import scheduleModel from "@/db/models/schedule";

export const dynamic = "force-dynamic";

export async function GET(req, res) {
  try {
    await connectDB();

    const data = await scheduleModel.find().sort({ _id: -1 });

    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ msg: "error", error }, { status: 500 });
  }
}
