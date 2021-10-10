import mongoose from "mongoose";

import { validateEmail, validateName } from "./userValidation";

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please, enter your first name."],
    validate: [validateName, "Please fill a valid last name"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Please, enter your last name."],
    validate: [validateName, "Please fill a valid last name"],
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
  },
});

const UserInfo = mongoose.model("User", UserSchema);

export default UserInfo;
