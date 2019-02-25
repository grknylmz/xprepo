import { Request, Response } from "express";
import * as mongoose from "mongoose";

export interface ISubject extends mongoose.Document {
  user: String;
  subject: String;
  review: String;
  voteCount: Number;
  approved: Boolean;
}

export const SubjectSchema = new mongoose.Schema({
  user: { type: String, required: false },
  subject: { type: String, required: false },
  review: { type: String, required: false },
  voteCount: { type: Number, required: false },
  approved: { type: Boolean, required: false }
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
