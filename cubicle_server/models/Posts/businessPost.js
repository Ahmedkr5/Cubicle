var commentaire = require('./commentaire');

const mongoose = require('mongoose');
const { use } = require('../../routes');
const postBusinessSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  businessId: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: false,
    default: null,
  },
  description: {
    type: String,
    required: true,
  },
  media: {
    type: [String],
  },
  likes: {
    type: [String],
  },
  created_at: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('businessposts', postBusinessSchema);
