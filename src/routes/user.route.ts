import express from "express";
import userController from "../controllers/user.controller";
import middleware from "../middlewares/auth";
const router = express.Router();
const UserController = new userController();
const Middleware = new middleware();

router.post("/create", Middleware.auth, UserController.register);
router.post("/login", UserController.login);

export default router;
