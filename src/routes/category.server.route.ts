import { Express } from "express";
import { categoryController } from "../controllers/category.server.controller";

export default class CategoryRoute {
	constructor(app: Express) {
		app.route("/createCategory")
			.get(categoryController.createCategory);
		app.route("/getCategories")
			.get(categoryController.getCategories);

	}
}