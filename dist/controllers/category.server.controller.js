"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var categories_1 = require("../models/categories");
var CategoryController = /** @class */ (function () {
    function CategoryController() {
    }
    CategoryController.prototype.createCategory = function (req, res, next) {
        categories_1.categoryAgent.createCategory(req, res);
    };
    CategoryController.prototype.getCategories = function (req, res, next) {
        categories_1.categoryAgent.getCategories(req, res);
    };
    return CategoryController;
}());
exports.default = CategoryController;
exports.categoryController = new CategoryController();
//# sourceMappingURL=category.server.controller.js.map