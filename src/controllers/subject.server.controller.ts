import { Request, Response } from "express";
import { subjectAgent } from "../models/subjects";
import { request } from "https";

export default class SubjectController {
  public createSubject(req: Request, res: Response, next: Function): void {
    subjectAgent.createSubject(req, res);
  }
  public getSubjects(req: Request, res: Response, next: Function): void {
    subjectAgent.getSubjects(req, res);
  }
}

export const subjectController = new SubjectController();
