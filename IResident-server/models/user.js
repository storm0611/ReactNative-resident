const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  first_name: {
    type: String,
    default: null,
  },
  last_name: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    unique: true,
  },
  verification_code: { type: String },
  password: { type: String },
  token: { type: String },
  created_at: { 
    type: Date, 
    default: Date.now() 
  },
});

module.exports = mongoose.model("user", userSchema);
