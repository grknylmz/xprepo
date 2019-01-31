"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var config = require("../config/config");
var MongoAgent = /** @class */ (function () {
    function MongoAgent() {
        this.db = config.default.mongodb;
    }
    MongoAgent.prototype.connect = function () {
        mongoose
            .connect(this.db)
            .then(function () { return console.log('MongoDB Connected'); })
            .catch(function (err) { return console.log(err); });
    };
    return MongoAgent;
}());
exports.mongoAgent = new MongoAgent();
//# sourceMappingURL=mongo.js.map