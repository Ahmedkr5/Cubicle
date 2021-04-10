var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  datenaissance: String,
  profileimage: String,
  coverimage: String,
  AboutMe : {
          description : String,
          adresse : String ,
          phone: String
       
    },
    Groups: [String],
    Friendship: [String] 

});
mongoose.model('User2', UserSchema);

module.exports = mongoose.model('User2');