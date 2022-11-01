"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_store_1 = __importDefault(require("../stores/user.store"));
const joi_1 = __importDefault(require("joi"));
const StatusCodeEnum_1 = __importDefault(require("../utils/StatusCodeEnum"));
const Response_1 = __importDefault(require("../utils/Response"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = __importDefault(require("../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserStore = new user_store_1.default();
class userController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object().keys({
                name: joi_1.default.string().required(),
                email: joi_1.default.string().email().required(),
                password: joi_1.default.string().required(),
            });
            const params = schema.validate(req.body, { abortEarly: false });
            if (params.error) {
                console.error(params.error);
                (0, Response_1.default)(res.status(400).send(StatusCodeEnum_1.default.UNPROCESSABLE_ENTITY));
            }
            const { name, email, password } = params.value;
            let existingUser;
            try {
                existingUser = yield UserStore.findByEmail(email);
                if (existingUser && existingUser.email) {
                    (0, Response_1.default)(res, { message: "email already exits" }, StatusCodeEnum_1.default.INTERNAL_SERVER_ERROR);
                }
            }
            catch (e) {
                console.log(e);
                (0, Response_1.default)(res, StatusCodeEnum_1.default.INTERNAL_SERVER_ERROR);
            }
            const hashPassword = yield bcrypt_1.default.hash(password, 10);
            const attribute = {
                name,
                password: hashPassword,
                email,
            };
            // let user;
            try {
                const user = yield UserStore.register(attribute);
                (0, Response_1.default)(res, { message: "User Created" }, StatusCodeEnum_1.default.OK);
                return user;
            }
            catch (e) {
                console.log(e);
                (0, Response_1.default)(res, StatusCodeEnum_1.default.INTERNAL_SERVER_ERROR);
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object().keys({
                email: joi_1.default.string().required(),
                password: joi_1.default.string().required(),
            });
            const user = yield user_model_1.default.findOne({ email: req.body.email });
            if (!user) {
                return res.status(404).send("Invalid email");
            }
            const validPassword = yield bcrypt_1.default.hash(req.body.password, user.password);
            if (!validPassword) {
                return res.status(400).send(" Invalid Password");
            }
            try {
                const { error } = yield schema.validateAsync(req.body);
                if (error) {
                    return res.status(400).send(error.details[0].message);
                }
                else {
                    const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.JWT_SECRET);
                    res.status(200).send({ token: token, message: " Login Successful" });
                }
            }
            catch (e) {
                res.status(500).send(e);
                (0, Response_1.default)(res, StatusCodeEnum_1.default.INTERNAL_SERVER_ERROR);
            }
        });
    }
}
exports.default = userController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3VzZXIuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUE2QztBQUU3Qyw4Q0FBc0I7QUFDdEIsNkVBQXFEO0FBQ3JELGlFQUE2QztBQUU3QyxvREFBNEI7QUFDNUIsc0VBQTZDO0FBQzdDLGdFQUErQjtBQUUvQixNQUFNLFNBQVMsR0FBRyxJQUFJLG9CQUFTLEVBQUUsQ0FBQztBQUVsQyxNQUFxQixjQUFjO0lBQ3BCLFFBQVEsQ0FBQyxHQUFZLEVBQUUsR0FBYTs7WUFDL0MsTUFBTSxNQUFNLEdBQUcsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDL0IsSUFBSSxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Z0JBQzdCLEtBQUssRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFO2dCQUN0QyxRQUFRLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTthQUNsQyxDQUFDLENBQUM7WUFDSCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNoRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixJQUFBLGtCQUFZLEVBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7YUFDekU7WUFFRCxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVB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