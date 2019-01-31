import * as http from "http";

const app = require("./config/express").default();

const server: http.Server = http.createServer(app);

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log("App is running on port " + port);
});

server.on("error", (e: Error) => {
  console.log("Error starting server" + e);
});