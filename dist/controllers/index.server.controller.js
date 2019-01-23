"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.index = function (req, res, next) {
        res.json({ msg: 'Welcome to XPREPO!' });
    };
    return IndexController;
}());
exports.default = IndexController;
exports.indexController = new IndexController();
//# sourceMappingURL=index.server.controller.js.map