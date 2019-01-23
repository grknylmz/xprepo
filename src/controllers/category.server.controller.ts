import { Request, Response } from 'express';
import { categoryAgent } from '../models/categories';
import { request } from 'https';

export default class CategoryController {
    public createCategory(req: Request, res: Response, next: Function): void {
        categoryAgent.createCategory(req, res);
    }
    public getCategories(req: Request, res: Response, next: Function): void {
        categoryAgent.getCategories(req, res);
    }
}

export const categoryController = new CategoryController();