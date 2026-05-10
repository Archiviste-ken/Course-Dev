import { log } from "console";
import app from "./src/app.js";
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
  console.log("new connection created");

  socket.on("message", (msg) => {
    console.log("User fired message event");
    console.log(msg);
    
  }); // on means event ko listen
});

httpServer.listen(3000, () => {
  console.log("Server is running on the port 3000");
});
