import { NextResponse } from "next/server";
import { connectDB } from "@/db/connectDB";
import scheduleModel from "@/db/models/schedule";

export const dynamic = "force-dynamic";

export async function PATCH(req) {
  try {
    // Parse the id from the request URL
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    // Connect to the database
    await connectDB();

    const updatedSchedule = await scheduleModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          approvalStatus: "Denied",
        },
      },
      { new: true }
    );

    return NextResponse.json(
      { msg: "success", data: updatedSchedule },
      { status: 200 }
    );
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { msg: "Error updating schedule", error },
      { status: 500 }
    );
  }
}
