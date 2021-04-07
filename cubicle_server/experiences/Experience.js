var mongoose = require('mongoose');  
var ExperienceSchema = new mongoose.Schema({  
  title: String,
  description: String,
  date: String,
  userid: String,
 });
mongoose.model('Experience', ExperienceSchema);

module.exports = mongoose.model('Experience');