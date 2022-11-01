"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const mongoose_1 = require("mongoose");
const env_1 = require("./env");
const user_route_1 = __importDefault(require("./routes/user.route"));
class App {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.connectToMongo();
        this.initializeMiddlewares();
    }
    connectToMongo() {
        (0, mongoose_1.connect)(`${env_1.MONGO_DB_CONNECTION_STRING}`, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
            .then(() => {
            console.log("Connected to MongoDB...");
        })
            .catch((e) => {
            console.error("There was an error connecting to MongoDB:");
            console.error(e);
        });
    }
    initializeMiddlewares() {
        this.app.use((0, body_parser_1.json)());
        this.app.use("/api/user", user_route_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUErQztBQUMvQyw2Q0FBbUM7QUFDbkMsdUNBQW1EO0FBQ25ELCtCQUFpRDtBQUNqRCxxRUFBNkM7QUFFN0MsTUFBcUIsR0FBRztJQUlwQixZQUFZLElBQVk7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVPLGNBQWM7UUFDbEIsSUFBQSxrQkFBTyxFQUFDLEdBQUcsZ0NBQTBCLEVBQUUsRUFBRTtZQUNyQyxrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLGVBQWUsRUFBRSxJQUFJO1NBQ04sQ0FBQzthQUNmLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7WUFDM0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTyxxQkFBcUI7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxrQkFBSSxHQUFFLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsb0JBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxNQUFNO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFuQ0Qsc0JBbUNDIn0=