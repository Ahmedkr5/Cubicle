const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
  userId: {
    type: Object,
    required: true,
  },
  postId: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Comments', CommentSchema);
