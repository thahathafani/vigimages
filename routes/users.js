const mongoose = require('mongoose');

const host = 'localhost';
const port = '27017';
const database = 'mydatabase';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // posts: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Post'
  // }],
  profilePicture: {
    type: String
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
