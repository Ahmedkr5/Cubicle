var mongoose = require('mongoose');  
var groupSchema = new mongoose.Schema({ 

    groupname: String,
    groupimage: String,
    description : String,
    Owner:String,
         
    
 });
 module.exports = mongoose.model('groups', groupSchema);