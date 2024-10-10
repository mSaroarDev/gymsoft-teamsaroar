import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    mobile: {
      type: String,
      required: false,
      trim: false,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
      enum: ["Admin", "Trainer", "Trainee"],
      default: "Trainee",
    },
    status: {
      type: String,
      enum: ["Active", "Pending", "Blocked"],
      default: "Active",
    },
    member_access_status: {
      type: String,
      enum: ["Active", "Banned", "Warned"],
      default: "Active",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.models.User || mongoose.model("User", userSchema);
export default userModel;
