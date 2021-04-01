const express = require('express');
const createError = require('http-errors')
const mongoose = require('mongoose')
require('dotenv').config() //for video call
const app = express();
const indexRouter = require('./routes/index');
app.use(express.json())
app.use(express.urlencoded({extended : false})) 
//for video call
var AccessToken = require("twilio").jwt.AccessToken;  
var VideoGrant = AccessToken.VideoGrant;  

const CONFIG={
  uri : process.env.DATABASE_URL,
  OPTIONS : {
    useNewUrlParser: true,
    useUnifiedTopology: true 
   
 
  }
}
mongoose.connect("mongodb+srv://mohamed:nextnext@cluster0.jt0yp.mongodb.net/Cubicle?retryWrites=true&w=majority",CONFIG.OPTIONS)
let db = mongoose.connection
db.on('open',()=>console.info('Connection to the database was successful'))

app.use('/',indexRouter)

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3002');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/token/:identity', function (req, res) {  
  const identity = req.params.identity;  

  // Create an access token which we will sign and return to the client,  
  // containing the grant we just created  
  var token = new AccessToken(  
    process.env.TWILIO_ACCOUNT_SID,  
    process.env.TWILIO_API_KEY,  
    process.env.TWILIO_API_SECRET  
  );  

  // Assign the generated identity to the token  
  token.identity = identity;  

  const grant = new VideoGrant();  
  // Grant token access to the Video API features  
  token.addGrant(grant);  

  // Serialize the token to a JWT string and include it in a JSON response  
  res.send({  
    identity: identity,  
    jwt: token.toJwt()  
  })  
}) 






app.listen(3001, function () {  
  console.log('Programmable Video Chat token server listening on port 3001!')  
}) 


const { createProxyMiddleware } = require('http-proxy-middleware');










module.exports = app;
