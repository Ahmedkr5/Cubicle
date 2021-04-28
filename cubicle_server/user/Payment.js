var mongoose = require('mongoose');  
var PaymentSchema = new mongoose.Schema({  
  payment_status: Boolean,
  token: String,
  amount: String,
  transaction_id: String,
  buyer_id: String,
  userid: String,

});
mongoose.model('Payment', PaymentSchema);

module.exports = mongoose.model('Payment');