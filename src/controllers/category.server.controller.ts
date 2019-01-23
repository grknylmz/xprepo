import { Request, Response } from 'express';

export default class CategoryController {
    public getCategories(req: Request, res: Response, next: Function): void {
        
        res.json({ msg: 'CATEGORIES' });
    }
}

export const categoryController = new CategoryController();