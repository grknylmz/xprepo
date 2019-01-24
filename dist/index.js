"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var app = require("./config/express").default();
var server = http.createServer(app);
var port = process.env.PORT || 8000;
server.listen(port, function () {
    console.log("App is running on port " + port);
});
server.on("error", function (e) {
    console.log("Error starting server" + e);
});
//# sourceMappingURL=index.js.map