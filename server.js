const http = require("http"); //http module built in from Node.js
const app = require("./app");

//set up server
server = http.createServer(app);

const PORT = 8000;
async function startServer() {
  server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`);
  });
}

startServer();
