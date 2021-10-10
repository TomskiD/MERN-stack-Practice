import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
  },
});

const UserInfo = mongoose.model("User", UserSchema);

export default UserInfo;
