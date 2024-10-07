

import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://gmridul898:MAq90xgPQ6MxPNSV@cluster0.nzdkm.mongodb.net/Crypto_venture"
    )
    .then(() => console.log("DB CONNECTED"));
};