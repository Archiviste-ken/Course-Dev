import "dotenv/config";
import app from "./src/app.js";
import http from "http";
import connectDB from "./src/config/db.js";
import { testAI } from "./src/services/ai.services.js";
import { initSocket } from "./src/sockets/server.sockets.js";

// testAI();

const httpServer = http.createServer(app);

initSocket(httpServer);

connectDB().catch((err) => {
  console.error("MongoDB connection failed:", err);
  process.exit(1);
});

httpServer.listen(3000, () => {
  console.log("server is now running on the port 3000");
});
