import mongoose from "mongoose";

export async function connectDB() {
  mongoose.connect(process.env.MONGO_URI as string).then(() => {
    console.log("MongoDB is connected");
  });
}
