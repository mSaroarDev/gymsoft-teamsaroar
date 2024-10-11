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
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    currStatus: {
      type: String,
      required: true,
      enum: ["Pending", "Completed"],
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
