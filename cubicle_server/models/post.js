const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: false,
    default: null,
  },
  created_at: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model('post', postSchema);
