const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const account = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3 
  }
}, {
  timestamps: true,
});

const Login = mongoose.model('Account', account);

module.exports = Login;