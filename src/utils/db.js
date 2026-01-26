import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connection.readyState === 1) return;

  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB error:", error.message);
    throw new Error("Connection failed!");
  }
};

export default connect;
