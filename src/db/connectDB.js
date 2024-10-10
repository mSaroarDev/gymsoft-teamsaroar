import mongoose from "mongoose";

let isConnected = false;
export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("DB Already Connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: process.env.DB_NAME,
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};
