import { Express } from "express";
import { subjectController } from "../controllers/subject.server.controller";

export default class SubjectRoute {
  constructor(app: Express) {
    app.route("/createSubject").post(subjectController.createSubject);
    app.route("/getSubjects").get(subjectController.getSubjects);
  }
}
