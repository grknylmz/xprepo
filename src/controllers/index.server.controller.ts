import { Request, Response } from 'express';

export default class IndexController {
    public index(req: Request, res: Response, next: Function): void {
        res.json({ msg: 'Welcome to XPREPO!' });
    }
}

export const indexController = new IndexController();