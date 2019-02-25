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
  user: { type: String, required: true },
  subject: { type: String, required: true },
  review: { type: String, required: true },
  voteCount: { type: Number, required: true },
  approved: { type: Boolean, required: true }
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
