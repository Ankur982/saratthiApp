const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneno: {
    type: Number,
    required: true,
    unique: true
  },
  dob: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },

}, { timestamps: true });


module.exports = mongoose.model("User", UserSchema);