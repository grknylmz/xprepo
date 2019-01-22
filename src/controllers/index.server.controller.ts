import { Request, Response } from 'express';

export default class IndexController {
    public index(req: Request, res: Response, next: Function): void {
        res.render('error', { error: 'Error' });
    }

    public msg(req: Request, res: Response): void {
        res.json({ msg: 'Hello!' });
    }

    public dummy(req: Request, res: Response): void {
        res.json({ msg: 'Hello!' });
    }
}

export const indexController = new IndexController();