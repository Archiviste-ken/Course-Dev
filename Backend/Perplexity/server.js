import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

connectDB().catch((err) => {
  console.error("MongoDB connection failed:", err);
  process.exit(1);
});

app.listen(3000, () => {
  console.log("server is now running on the port 3000");
});
