import { Request, Response } from "express";
import * as mongoose from "mongoose";
const Schema = mongoose.Schema;
const SubjectSchema = new Schema({
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
const Subject = mongoose.model("Subject", SubjectSchema);

class SubjectAgent {
  public createSubject(req: Request, res: Response) {
    let subject = new Subject(req.body);
    subject.save((err: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(subject);
      }
    });
  }
  public getSubjects(req: Request, res: Response) {
    Subject.find((err: any, subjects: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(subjects);
      }
    });
  }
}
export const subjectAgent = new SubjectAgent();
