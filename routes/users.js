const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:127017/vigimages");

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
