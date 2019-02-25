import { Request, Response } from "express";
import * as mongoose from "mongoose";

export interface ICategory extends mongoose.Document {
  category: string;
}

export const CategorySchema = new mongoose.Schema({
  category: { type: String, required: true }
});

const Category = mongoose.model("Category", CategorySchema);

class CategoryAgent {
  public createCategory(req: Request, res: Response) {
    let category = new Category(req.body);
    category.save((err: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(category);
      }
    });
  }
  public getCategories(req: Request, res: Response) {
    Category.find((err: any, categories: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(categories);
      }
    });
  }
}
export const categoryAgent = new CategoryAgent();
