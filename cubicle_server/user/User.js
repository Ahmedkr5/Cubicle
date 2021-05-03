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
  GroupsentRequests:{
    type:[{ name: String, id: String}],
    default:[]
  },
    Groups: {
      type:[{ name: String,image: String, id:String}],
      default:[]
    },
    sentRequests:{
      type:[{ name: String, id: String}],
      default:[]
    },
    friendRequests: {
      type:[{ name: String,image: String, id:String}],
      default:[]
    },
    friends: {
      type:[{ name: String,image: String, id:String}],
      default:[]
    },
    totalRequest: {type: Number, default:0}

});
mongoose.model('User2', UserSchema);

module.exports = mongoose.model('User2');