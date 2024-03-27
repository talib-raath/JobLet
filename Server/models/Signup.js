// models/Signup.js

const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String
});

const Signup = mongoose.model('Signup', signupSchema);

module.exports = Signup;
