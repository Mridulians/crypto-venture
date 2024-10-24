import dotenv from "dotenv"; // Make sure to import dotenv
import mongoose from "mongoose";

// Load environment variables
dotenv.config();

const mongoDbUrl = process.env.MONGODB_URL;

export const connectDB = async () => {
  await mongoose.connect(mongoDbUrl).then(() => console.log("DB CONNECTED"));
};
