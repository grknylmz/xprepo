"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var config_1 = require("./config");
var cookieParser = require("cookie-parser");
var express = require("express");
var logger = require("morgan");
var path = require("path");
var mongo_1 = require("../util/mongo");
var cors = require("cors");
function default_1(db) {
    var app = express();
    for (var _i = 0, _a = config_1.default.globFiles(config_1.default.models); _i < _a.length; _i++) {
        var model = _a[_i];
        require(path.resolve(model));
    }
    if (config_1.default.useMongo) {
        mongo_1.mongoAgent.connect();
    }
    //View engine
    app.set("views", path.join(__dirname, "../../src/views"));
    app.set("view engine", "jade");
    //Packages
    app.use(cors());
    app.use(logger("dev"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, "../../src/public")));
    for (var _b = 0, _c = config_1.default.globFiles(config_1.default.routes); _b < _c.length; _b++) {
        var route = _c[_b];
        require(path.resolve(route)).default(app);
    }
    app.use(function (req, res, next) {
        var err = new Error("Not Found");
        next(err);
    });
    return app;
}
exports.default = default_1;
;
//# sourceMappingURL=express.js.map