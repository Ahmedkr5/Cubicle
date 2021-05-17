var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  datenaissance: String,
  profileimage: String,
  coverimage: String,
  description : String,
  adresse : String ,
  phone: String,
  Coins: String,
  groupInvitations:[String], 
  groupRequests:[String],  //ki yebda owner ta3 group
    
  friendRequests: [String],
  friends: [String],
 

});
mongoose.model('User2', UserSchema);

module.exports = mongoose.model('User2');