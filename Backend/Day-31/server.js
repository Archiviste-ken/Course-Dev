import app from "./src/app.js";
const { createServer } = require("http");
const { Server } = require("socket.io");

app.listen(3000, () => {
  console.log("server is now connected to the port 3000");
});
