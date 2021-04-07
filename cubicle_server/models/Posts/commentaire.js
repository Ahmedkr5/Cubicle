const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  idPost: {
    type: String,
    required: true,
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
module.exports = mongoose.model('post', postSchema);
