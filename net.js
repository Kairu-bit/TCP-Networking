import net from "net";

const server = net.createServer();

server.on("connection", (socket) => {
  console.log("New Client Connected");
  socket.write("Hello, New Client\n");
  socket.on("data", (data) => {
    console.log(`Client Send a Data: ${data.toString()}`)
  })
  socket.on("error", () => console.log("Client Disconnected"));
})

server.listen(8000, () => console.log("Server Listening..."))
