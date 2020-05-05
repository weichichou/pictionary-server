const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("chat msg", (msg) => {
    io.emit("chat msg", msg);
    console.log("chat msg: " + msg);
  });
  socket.on("drawing", (data) => {
    console.log("drawing");
    socket.broadcast.emit("drawing", data);
  });
  socket.on("question", (word) => {
    console.log("question selected");
    io.emit("question", word);
  });

  socket.on("roundover", (username) => {
    console.log(`${username} wins`);
    io.emit("roundover", username);
  });
});

http.listen(3001, () => {
  console.log("listening on port 3001");
});
