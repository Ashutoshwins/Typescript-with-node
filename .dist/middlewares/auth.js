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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class middleware {
    auth(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tokenString = req.headers.authorization;
                const token = tokenString.replace("Bearer ", "");
                //   console.log(token);
                const secretkey = process.env.SECRET_KEY;
                const verifyUser = jsonwebtoken_1.default.verify(token, secretkey);
                if (!verifyUser) {
                    req.userId = verifyUser._id;
                    // return res.status(401).send({ msg: "User aUnuthorized" });
                }
                next();
            }
            catch (e) {
                res.status(401).send({ msg: "User Unauthorized" });
            }
        });
    }
}
exports.default = middleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9hdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQStCO0FBRy9CLE1BQXFCLFVBQVU7SUFDdkIsSUFBSSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7O1lBQ3hELElBQUk7Z0JBQ0YsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7Z0JBRTlDLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRCx3QkFBd0I7Z0JBQ3RCLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO2dCQUV6QyxNQUFNLFVBQVUsR0FBRyxzQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2YsR0FBRyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO29CQUM1Qiw2REFBNkQ7aUJBQzlEO2dCQUNELElBQUksRUFBRSxDQUFDO2FBQ1I7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7YUFDcEQ7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQW5CRCw2QkFtQkMifQ==