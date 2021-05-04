const mongoose = require('mongoose');
const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  members: {
    type: [String],
    required: true,
  },
});
module.exports = mongoose.model('business', businessSchema);
