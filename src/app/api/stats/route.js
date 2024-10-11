import scheduleModel from "@/db/models/schedule";
import userModel from "@/db/models/users";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const trainerName = searchParams.get("trainerName");

  try {
    const totalUsers = await userModel.countDocuments();
    const totalTrainers = await userModel.countDocuments({
      role: "Trainer",
    });
    const totalTrainees = await userModel.countDocuments({
      role: "Trainee",
    });
    const totalAdmins = await userModel.countDocuments({
      role: "Admin",
    });
    const totalSchedules = await scheduleModel.countDocuments();
    const bookRequests = await scheduleModel.countDocuments({
      approvalStatus: "Pending",
    });

    const myPendingRequests = await scheduleModel.countDocuments({
      createdBy: userId,
      approvalStatus: "Pending",
    });

    const myAllRquests = await scheduleModel.countDocuments({
      createdBy: userId,
    });

    const allAssignedRequest = await scheduleModel.countDocuments({
      trainerName: trainerName,
    });

    return NextResponse.json({
      msg: "success",
      data: {
        totalUsers, 
        totalTrainers,
        totalTrainees,
        totalAdmins,
        totalSchedules,
        bookRequests,
        myPendingRequests,
        myAllRquests,
        allAssignedRequest,
      },
    });
  } catch (error) {
    return NextResponse.json({ msg: "error", error });
  }
}
