import { NextFunction, Request, Response } from "express";
export default class middleware {
    auth(req: Request, res: Response, next: NextFunction): Promise<void>;
}
