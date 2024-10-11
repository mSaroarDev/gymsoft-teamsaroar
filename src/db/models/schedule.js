import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema(
  {
    trainerName: {
      type: String,
      required: true,
    },
    traineeName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    currStatus: {
      type: String,
      required: true,
      enum: ["Pending", "Assigned", "Completed"],
      default: "Pending",
    },
    approvalStatus: {
      type: String,
      required: true,
      enum: ["Pending", "Appointed", "Denied"],
      default: "Pending",
    },
    createdBy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const scheduleModel =
  mongoose.models.Schedule || mongoose.model("Schedule", scheduleSchema);
export default scheduleModel;
