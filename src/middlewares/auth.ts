import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export default class middleware {
  async auth(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenString = req.headers.authorization;

      const token = tokenString.replace("Bearer ", "");
    //   console.log(token);
      const secretkey = process.env.SECRET_KEY;

      const verifyUser = jwt.verify(token, secretkey);
      if (!verifyUser) {
        req.userId = verifyUser._id;
        // return res.status(401).send({ msg: "User aUnuthorized" });
      }
      next();
    } catch (e) {
      res.status(401).send({ msg: "User Unauthorized" });
    }
  }
}
