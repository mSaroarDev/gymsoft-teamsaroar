import { NextResponse } from "next/server";
import { connectDB } from "@/db/connectDB";
import scheduleModel from "@/db/models/schedule";
import userModel from "@/db/models/users";

export const dynamic = "force-dynamic";

export async function PATCH(req) {
  try {
    // Parse the id from the request URL
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { msg: "Invalid request, no ID provided" },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectDB();

    // Find the requested schedule by ID
    const requestedSchedule = await scheduleModel.findById(id);

    if (!requestedSchedule) {
      return NextResponse.json({ msg: "Schedule not found" }, { status: 404 });
    }

    const { date, startTime, endTime, trainerName, approvalStatus } =
      requestedSchedule;

    // Check if the schedule is already appointed
    if (approvalStatus === "Appointed") {
      return NextResponse.json(
        { msg: "This schedule is already approved" },
        { status: 400 }
      );
    }

    // Find the targeted trainer by name
    const targettedTrainer = await userModel.findOne({ name: trainerName });

    if (!targettedTrainer) {
      return NextResponse.json({ msg: "Trainer not found" }, { status: 404 });
    }

    // Convert incoming date to ISO string (YYYY-MM-DD)
    const incomingDate = new Date(date).toISOString().split("T")[0];

    // Find schedules with the same trainer, date, and overlapping time slots that are already approved
    const conflictingSchedule = await scheduleModel.findOne({
      trainerName: trainerName,
      date: { $eq: incomingDate },
      approvalStatus: "Appointed",
      $or: [
        { startTime: { $lt: endTime }, endTime: { $gt: startTime } }, // Overlapping time
      ],
    });

    if (conflictingSchedule) {
      return NextResponse.json(
        {
          msg: "Trainer not available during this time, conflicting schedule found",
        },
        { status: 404 }
      );
    }

    // If no conflicts, update the schedule's approvalStatus to "Appointed"
    const updatedSchedule = await scheduleModel.findByIdAndUpdate(
      id,
      { approvalStatus: "Appointed" }, // Set approvalStatus to "Appointed"
      { new: true }
    );

    return NextResponse.json(
      { msg: "Schedule approved", data: updatedSchedule },
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
