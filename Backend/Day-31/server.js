import { log } from "console";
import app from "./src/app.js";
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });



io.on("connection", (socket) => {
  // ...
});

httpServer.listen(3000, ()=> {
    console.log("Server is running on the port 3000");
    
});
