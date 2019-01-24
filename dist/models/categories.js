"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
;
exports.CategorySchema = new mongoose.Schema({
    category: { type: String, required: true }
});
var Category = mongoose.model('Category', exports.CategorySchema);
var CategoryAgent = /** @class */ (function () {
    function CategoryAgent() {
    }
    CategoryAgent.prototype.createCategory = function (req, res) {
        var category = new Category(req.body);
        category.save(function (err) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(category);
            }
        });
    };
    CategoryAgent.prototype.getCategories = function (req, res) {
        var categories = Category.find(function (err, categories) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(categories);
            }
        });
    };
    return CategoryAgent;
}());
exports.categoryAgent = new CategoryAgent();
//# sourceMappingURL=categories.js.map