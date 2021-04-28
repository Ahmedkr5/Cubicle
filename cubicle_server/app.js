const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const schemaTest = require('./schema/schemaTest');
const createError = require('http-errors');
const mongoose = require('mongoose');
require('dotenv').config(); //for video call
const app = express();
var cors = require('cors');
const indexRouter = require('./routes/index');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var socket = require('socket.io');
//for video call
var AccessToken = require('twilio').jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;

var UserController = require('./user/UserController');
var AuthController = require('./auth/AuthController');
var ExperienceController = require('./experiences/ExperienceController');
var PostController = require('./experiences/ExperienceController');
var path = require('path');
app.use(cors());

app.use(express.static(path.resolve('./public')));
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// graphql use
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.use(
  '/graphqlTest',
  graphqlHTTP({
    schema: schemaTest,
    graphiql: true,
  })
);

// frontend calls
app.use('/users', UserController);
app.use('/experiences', ExperienceController);
app.use('/api/auth', AuthController);
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

module.exports = app;

const CONFIG = {
  uri: process.env.DATABASE_URL,
  OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
mongoose.connect(
  'mongodb+srv://mohamed:nextnext@cluster0.jt0yp.mongodb.net/Cubicle?retryWrites=true&w=majority',
  CONFIG.OPTIONS
);
let db = mongoose.connection;
db.on('open', () => console.info('Connection to the database was successful'));
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use('/', indexRouter);

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
    jwt: token.toJwt(),
  });
});

const server = app.listen(3001, function () {
  console.log('Programmable Video Chat token server listening on port 3001!');
});
var io = socket(server);
const MsgIo = require('./controller/MsgIoController');
MsgIo(app, io);

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app;
