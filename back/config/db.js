// import dotenv from "dotenv"; // Make sure to import dotenv
// import mongoose from "mongoose";

// // Load environment variables
// dotenv.config();

// const mongoDbUrl = process.env.MONGODB_URL; 

// console.log(typeof(mongoDbUrl))

// export const connectDB = async () => {
//   await mongoose.connect(mongoDbUrl).then(() => console.log("DB CONNECTED"));
// };


import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment variables
dotenv.config();

const mongoDbUrl = process.env.MONGODB_URL;

// Log the MongoDB URL for debugging purposes
console.log("MongoDB URL:", mongoDbUrl);

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoDbUrl, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("DB CONNECTED");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process with a failure
  }
};
