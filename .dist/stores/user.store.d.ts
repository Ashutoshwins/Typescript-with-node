/// <reference types="node" />
import IUser from "../utils/interface/IUser";
export default class userStore {
    static OPERATION_UNSUCCESSFUL: {
        new (): {
            name: string;
            message: string;
            stack?: string;
        };
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
        stackTraceLimit: number;
    };
    register(attribute: any): Promise<IUser>;
    findByEmail(email: any): Promise<IUser>;
}
