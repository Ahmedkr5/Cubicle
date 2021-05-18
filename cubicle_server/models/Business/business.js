var mongoose = require('mongoose');  
var businessSchema = new mongoose.Schema({ 

    name: String,
    Owner: String,
    desc: String,
    members: [String],

    
 });
 module.exports = mongoose.model('business', businessSchema);