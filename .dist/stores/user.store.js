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
const user_model_1 = __importDefault(require("../models/user.model"));
class userStore {
    register(attribute) {
        return __awaiter(this, void 0, void 0, function* () {
            let user;
            try {
                user = yield user_model_1.default.create(attribute);
                return user;
            }
            catch (e) {
                return Promise.reject(new userStore.OPERATION_UNSUCCESSFUL());
            }
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let user;
            try {
                user = yield user_model_1.default.findOne({ email });
            }
            catch (e) {
                return Promise.reject(new userStore.OPERATION_UNSUCCESSFUL());
            }
            return user;
        });
    }
}
exports.default = userStore;
userStore.OPERATION_UNSUCCESSFUL = class extends Error {
    constructor() {
        super("An error occured while processing the request.");
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yZXMvdXNlci5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUE2QztBQUc3QyxNQUFxQixTQUFTO0lBT2YsUUFBUSxDQUFDLFNBQVM7O1lBQzdCLElBQUksSUFBVyxDQUFDO1lBQ2hCLElBQUk7Z0JBQ0YsSUFBSSxHQUFHLE1BQU0sb0JBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3pDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxTQUFTLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO2FBQy9EO1FBQ0gsQ0FBQztLQUFBO0lBQ1ksV0FBVyxDQUFDLEtBQUs7O1lBQzVCLElBQUksSUFBVyxDQUFDO1lBQ2hCLElBQUk7Z0JBQ0YsSUFBSSxHQUFHLE1BQU0sb0JBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQzNDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQzthQUMvRDtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztLQUFBOztBQXhCSCw0QkF5QkM7QUF4QmlCLGdDQUFzQixHQUFHLEtBQU0sU0FBUSxLQUFLO0lBQ3REO1FBQ0UsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUNGLENBQUMifQ==