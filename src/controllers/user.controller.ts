import userStore from "../stores/user.store";
import { Request, Response } from "express";
import Joi from "joi";
import StatusCodeEnum from "../utils/StatusCodeEnum";
import SendResponse from "../utils/Response";
import IUser from "../utils/interface/IUser";
import bcrypt from "bcrypt";
import userModel from "../models/user.model";
import jwt from "jsonwebtoken";

const UserStore = new userStore();

export default class userController {
  public async register(req: Request, res: Response) {
    const schema = Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    const params = schema.validate(req.body, { abortEarly: false });
    if (params.error) {
      console.error(params.error);
      SendResponse(res.status(400).send(StatusCodeEnum.UNPROCESSABLE_ENTITY));
    }

    const { name, email, password } = params.value;

    let existingUser: IUser;
    try {
      existingUser = await UserStore.findByEmail(email);
      if (existingUser && existingUser.email) {
        SendResponse(
          res,
          { message: "email already exits" },
          StatusCodeEnum.INTERNAL_SERVER_ERROR
        );
      }
    } catch (e) {
      console.log(e);
      SendResponse(res, StatusCodeEnum.INTERNAL_SERVER_ERROR);
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const attribute = {
      name,
      password: hashPassword,
      email,
    };

    // let user;
    try {
      const user = await UserStore.register(attribute);
      SendResponse(res, { message: "User Created" }, StatusCodeEnum.OK);
      return user;
    } catch (e) {
      console.log(e);
      SendResponse(res, StatusCodeEnum.INTERNAL_SERVER_ERROR);
    }
  }

  public async login(req: Request, res: Response) {
    const schema = Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    });
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send("Invalid email");
    }
    const validPassword = await bcrypt.hash(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).send(" Invalid Password");
    }
    try {
      const { error } = await schema.validateAsync(req.body);
      if (error) {
        return res.status(400).send(error.details[0].message);
      } else {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.status(200).send({ token: token, message: " Login Successful" });
      }
    } catch (e) {
      res.status(500).send(e);
      SendResponse(res, StatusCodeEnum.INTERNAL_SERVER_ERROR);
    }
  }
}
