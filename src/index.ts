import * as http from "http";
import config from "./config/config";

const app = require("./config/express").default();

const server: http.Server = http.createServer(app);

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log("App is running on port " + port);
});

server.on("error", (e: Error) => {
  console.log("Error starting server" + e);
});

server.on("listening", () => {
  if (config.useMongo) {
    console.log(`Server started on port ${config.port} on env ${process.env.NODE_ENV || 'dev'} dbcon ${config.mongodb}`);
  } else {
    console.log(`Server started on port ${config.port} on env ${process.env.NODE_ENV || 'dev'}`);
  }
});