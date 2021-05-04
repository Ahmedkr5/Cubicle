var mongoose = require('mongoose');  
var Test2Schema = new mongoose.Schema({ 

    groupname: String,

    
 });
 module.exports = mongoose.model('Test2', Test2Schema);