"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const router = express_1.default.Router();
const UserController = new user_controller_1.default();
const Middleware = new auth_1.default();
router.post("/create", Middleware.auth, UserController.register);
router.post("/login", UserController.login);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlci5yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixxRkFBNEQ7QUFDNUQsK0RBQTZDO0FBQzdDLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEMsTUFBTSxjQUFjLEdBQUcsSUFBSSx5QkFBYyxFQUFFLENBQUM7QUFDNUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxjQUFVLEVBQUUsQ0FBQztBQUVwQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFNUMsa0JBQWUsTUFBTSxDQUFDIn0=