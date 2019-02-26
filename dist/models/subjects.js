"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var SubjectSchema = new Schema({
    user: {
        type: String,
        required: "Enter a username."
    },
    subject: {
        type: String,
        required: "Enter a subject."
    },
    review: {
        type: String,
        required: "Enter a review."
    },
    voteCount: {
        type: Number
    },
    approved: {
        type: Boolean
    }
});
var Subject = mongoose.model("Subject", SubjectSchema);
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
        Subject.find(function (err, subjects) {
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