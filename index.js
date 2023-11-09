const express = require("express");
const app = express();
let http = require("http").createServer(app);
let io = require("socket.io")(http);

io.on("connection", (socket) => {

socket.on("disconnect",() => {
    console.log("Desconectou");
})

  socket.on("palavra", (data) => {
    socket.emit("resultado", data + "Guia do programador");
  });
});

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

http.listen(8080, () => {
  console.log("Rodando.");
});
