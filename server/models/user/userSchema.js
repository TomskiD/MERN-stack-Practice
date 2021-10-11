import mongoose from "mongoose";
import validateEmail from "./userValidation.js";

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email adress is required"],
    validate: [validateEmail, "Please fill a valid email address"],
  },
  date: {
    type: Date,
    default: Date.now(),
    required: [true, "Date is required"],
  },
});

const UserInfo = mongoose.model("User", UserSchema);

export default UserInfo;
