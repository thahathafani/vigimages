const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  likes: {
    type: Array,
    default: [],
  },
}, {
  timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
