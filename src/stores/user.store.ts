import userModel from "../models/user.model";
import IUser from "../utils/interface/IUser";

export default class userStore {
    public static OPERATION_UNSUCCESSFUL = class extends Error {
        constructor() {
          super("An error occured while processing the request.");
        }
      };

  public async register(attribute) {
    let user: IUser;
    try {
      user = await userModel.create(attribute);
      return user;
    } catch (e) {
      return Promise.reject(new userStore.OPERATION_UNSUCCESSFUL());
    }
  }
  public async findByEmail(email) {
    let user: IUser;
    try {
      user = await userModel.findOne({ email });
    } catch (e) {
      return Promise.reject(new userStore.OPERATION_UNSUCCESSFUL());
    }
    return user;
  }
}
