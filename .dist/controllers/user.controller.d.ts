import { Request, Response } from "express";
import IUser from "../utils/interface/IUser";
export default class userController {
    register(req: Request, res: Response): Promise<IUser>;
    login(req: Request, res: Response): Promise<any>;
}
