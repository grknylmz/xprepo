"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var category_server_controller_1 = require("../controllers/category.server.controller");
var CategoryRoute = /** @class */ (function () {
    function CategoryRoute(app) {
        app.route("/createCategory").post(category_server_controller_1.categoryController.createCategory);
        app.route("/getCategories").get(category_server_controller_1.categoryController.getCategories);
    }
    return CategoryRoute;
}());
exports.default = CategoryRoute;
//# sourceMappingURL=category.server.route.js.map