const { createServer } = require("http");
const dotenv = require("dotenv");
const { join } = require("path");
const { Server } = require("socket.io")

const dotenvConfig = dotenv.config({ path: join(__dirname, "./.env") });

if (!!dotenvConfig.error) {
  console.log("[-] dotenvConfig", dotenvConfig.error)
  console.log("[i] process terminated")
  process.exit(1)
}

const port = process.env.PORT
const host = process.env.HOST

const { app } = require("./app");
const server = createServer(app);



const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
  }

})

io.on("connection", socket => {
  console.log("someon connected ");

});

server.listen(port, host, () => {
  console.info(`server is running on ${host}: ${port}`);
});