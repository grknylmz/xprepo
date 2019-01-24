"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var MongoAgent = /** @class */ (function () {
    function MongoAgent() {
        this.db = "mongodb://emsworks:grk426333@ds127101.mlab.com:27101/xprepo";
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