"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var subject_server_controller_1 = require("../controllers/subject.server.controller");
var SubjectRoute = /** @class */ (function () {
    function SubjectRoute(app) {
        app.route("/createSubject").post(subject_server_controller_1.subjectController.createSubject);
        app.route("/getSubjects").get(subject_server_controller_1.subjectController.getSubjects);
    }
    return SubjectRoute;
}());
exports.default = SubjectRoute;
//# sourceMappingURL=subject.server.route.js.map