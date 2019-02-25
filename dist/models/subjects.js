"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
exports.SubjectSchema = new mongoose.Schema({
    user: { type: String, required: true },
    subject: { type: String, required: true },
    review: { type: String, required: true },
    voteCount: { type: Number, required: true },
    approved: { type: Boolean, required: true }
});
var Subject = mongoose.model("Subject", exports.SubjectSchema);
var SubjectAgent = /** @class */ (function () {
    function SubjectAgent() {
    }
    SubjectAgent.prototype.createSubject = function (req, res) {
        var subject = new Subject(req.body);
        subject.save(function (err) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(subject);
            }
        });
    };
    SubjectAgent.prototype.getSubjects = function (req, res) {
        var subjects = Subject.find(function (err, subjects) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(subjects);
            }
        });
    };
    return SubjectAgent;
}());
exports.subjectAgent = new SubjectAgent();
//# sourceMappingURL=subjects.js.map