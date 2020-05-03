const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat msg", (msg) => {
    io.emit("chat msg", msg);
    console.log("chat msg: " + msg);
  });
});

http.listen(3001, () => {
  console.log("listening on port 3001");
});
