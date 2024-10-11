import { NextResponse } from "next/server";
import { connectDB } from "@/db/connectDB";
import scheduleModel from "@/db/models/schedule";
import { plusTwoHours } from "@/utils/PlusTwoHour";
import userModel from "@/db/models/users";

export const dynamic = "force-dynamic";

export async function POST(req, res) {
  const formdata = await req.json();
  const { date, startTime, endTime } = formdata;

  try {
    await connectDB();

    const newData = new scheduleModel({
      ...formdata,
      endTime: plusTwoHours(formdata.startTime),
    });

    const targettedTrainer = await userModel.findOne({
      name: formdata.trainerName,
    });

    if (!targettedTrainer) {
      return NextResponse.json({ msg: "Trainer not found" }, { status: 404 });
    }

    // Convert incoming date to ISO string
    const incomingDate = new Date(date).toISOString().split("T")[0];

    // return if not available
    const isBooked = targettedTrainer.avaibility?.today_Schedules?.some(
      (item) => {
        const scheduleDate = new Date(item?.date).toISOString().split("T")[0];

        // Compare dates first
        if (
          scheduleDate === incomingDate &&
          item.approvalStatus === "Appointed"
        ) {
          // Check for overlapping times
          const itemStartTime = item.startTime;
          const itemEndTime = item.endTime;

          // Convert times to comparable values
          const newStartTime = startTime;
          const newEndTime = endTime;

          // Check for overlap
          return (
            (newStartTime >= itemStartTime && newStartTime < itemEndTime) ||
            (newEndTime > itemStartTime && newEndTime <= itemEndTime) ||
            (newStartTime <= itemStartTime && newEndTime >= itemEndTime)
          );
        }
        return false;
      }
    );

    if (isBooked) {
      return NextResponse.json(
        { msg: "Trainer not available" },
        { status: 404 }
      );
    }

    // return if not available
    const findDateSchedules =
      targettedTrainer.avaibility?.today_Schedules?.filter((item) => {
        const itemDate = new Date(item.date).toISOString().split("T")[0];
        const inputDate = new Date(date).toISOString().split("T")[0];

        return itemDate === inputDate && item.approvalStatus === "Appointed";
      });

    if (findDateSchedules?.length >= 5) {
      return NextResponse.json(
        { msg: "Trainer not available" },
        { status: 404 }
      );
    }

    // Access and modify the availability object
    let updatedAvaibility = {
      currStatus: targettedTrainer.avaibility?.currStatus || "available",
      today_Schedules: targettedTrainer.avaibility?.today_Schedules || [],
    };

    // save the data
    const data = await newData.save();

    // Add the new schedule to today's schedules
    updatedAvaibility.today_Schedules.push(data);

    // Update the current status based on the number of schedules
    if (updatedAvaibility.today_Schedules.length >= 5) {
      updatedAvaibility.currStatus = "unavailable";
    } else {
      updatedAvaibility.currStatus = "available";
    }

    // Update the trainer's availability in the database
    await userModel.findByIdAndUpdate(
      targettedTrainer._id,
      {
        $set: {
          avaibility: updatedAvaibility,
        },
      },
      { new: true }
    );

    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ msg: "error", error }, { status: 500 });
  }
}
