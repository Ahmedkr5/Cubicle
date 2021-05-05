const mongoose = require('mongoose');
var schema = mongoose.Schema;
var ObjectId = schema.ObjectId;
const CommentSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    required: true,
  },
  postId: {
    type: ObjectId,
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
