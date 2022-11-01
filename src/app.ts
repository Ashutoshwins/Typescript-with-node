import express, { Application } from "express";
import { json } from "body-parser";
import { connect, ConnectOptions } from "mongoose";
import {MONGO_DB_CONNECTION_STRING} from "./env";
import userRoutes from "./routes/user.route";

export default class App {
    public app: Application;
    public port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;
        this.connectToMongo();
        this.initializeMiddlewares();
    }

    private connectToMongo() {
        connect(`${MONGO_DB_CONNECTION_STRING}`, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        } as ConnectOptions)
            .then(() => {
                console.log("Connected to MongoDB...");
            })
            .catch((e) => {
                console.error("There was an error connecting to MongoDB:");
                console.error(e);
            });
    }

    private initializeMiddlewares() {
        this.app.use(json());
        this.app.use("/api/user",userRoutes);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
