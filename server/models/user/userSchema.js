import mongoose from "mongoose";

import { validateEmail } from "./userValidation";

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please, enter your first name."],
    trim: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    required: [true, "Please, enter your last name."],
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
});

const UserInfo = mongoose.model("User", UserSchema);

export default UserInfo;
