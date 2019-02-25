"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var subjects_1 = require("../models/subjects");
var SubjectController = /** @class */ (function () {
    function SubjectController() {
    }
    SubjectController.prototype.createSubject = function (req, res, next) {
        subjects_1.subjectAgent.createSubject(req, res);
    };
    SubjectController.prototype.getSubjects = function (req, res, next) {
        subjects_1.subjectAgent.getSubjects(req, res);
    };
    return SubjectController;
}());
exports.default = SubjectController;
exports.subjectController = new SubjectController();
//# sourceMappingURL=subject.server.controller.js.map