import mongoose from "mongoose";
import shortid from "shortid";

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => shortid(),
  },

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;