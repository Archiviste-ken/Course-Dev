import mongoose from "mongoose";

async function connectDB() {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connected to DB");
  });
}

export default connectDB;
