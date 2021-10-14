const mongoose = require("mongoose");
const validateEmail = require("./utils");

const EventSchema = mongoose.Schema({
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
    unique: true,
    required: [true, "Email adress is required"],
    validate: [validateEmail, "Please fill a valid email address"],
  },
  date: {
    type: Date,
    default: Date.now(),
    required: [true, "Date is required"],
  },
});

module.exports = mongoose.model("Event", EventSchema);
