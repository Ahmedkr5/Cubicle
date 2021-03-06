const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const schemaTest = require('./schema/schemaTest');
const schemaEditorUpdate = require('./schema/schemaEditorUpdate');
const schemaBusiness = require('./schema/schemaBusiness');
const schemaQuiz = require('./schema/schemaQuiz');
const createError = require('http-errors');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
require('dotenv').config(); //for video call
const Formidable = require('formidable');
const cloudinary = require('cloudinary');
const app = express();
var cors = require('cors');
const indexRouter = require('./routes/index');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var socket = require('socket.io');
//for video call
var AccessToken = require('twilio').jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;
const fetch = require('node-fetch');
var groupController = require('./controller/groupController');
var UserController = require('./user/UserController');
var AuthController = require('./auth/AuthController');
var businessController = require('./controller/businessController');
var ExperienceController = require('./experiences/ExperienceController');
var PostController = require('./experiences/ExperienceController');
var path = require('path');
var appDir = path.dirname(require.main.filename);
app.use(cors());

app.use(express.static(path.resolve('./public')));
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

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

app.use(
  '/graphqlEditor',
  graphqlHTTP({
    schema: schemaEditorUpdate,
    graphiql: true,
  })
);

app.use(
  '/graphqlBusiness',
  graphqlHTTP({
    schema: schemaBusiness,
    graphiql: true,
  })
);

app.use(
  '/graphqlQuiz',
  graphqlHTTP({
    schema: schemaQuiz,
    graphiql: true,
  })
);

app.get('/post/link/', function (req, res) {
  // console.log(req);
  var url = req.query.url.toString();
  // console.log(req);
  fetch(url)
    .then((res) => res)
    .then((data) => {
      // console.log(data);
      res.send({
        success: 1,
        meta: data.url,
      });
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

// frontend calls
app.use('/users', UserController);
app.use('/groups', groupController);
app.use('/business', businessController);
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
  'mongodb+srv://ahmed:ahmed@cluster0.jt0yp.mongodb.net/Cubicle?retryWrites=true&w=majority',
  CONFIG.OPTIONS
);
let db = mongoose.connection;
db.on('open', () => console.info('Connection to the database was successful'));
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

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

app.get('/image/:name', function (req, res) {
  // console.log(appDir.split(':')[1].split('bin')[0]);
  try {
    res.sendFile(
      'http://localhost:3001/uploads/postImages/' + req.params.name
    );
  } catch (err) {
    res.send(err);
  }
});

app.post('/post/upload/:userId', function (req, res) {
  // console.log(appDir.split(':')[1].split('bin')[0]);
  try {
    form = new Formidable();

    form.parse(req, (err, fields, files) => {
      // console.log(files.image.path);
      cloudinary.uploader.upload(files.image.path, (result) => {
        return res.status(200).json({
          success: 1,
          file: {
            url: result.url,
            // ... and any additional fields you want to store, such as width, height, color, extension, etc
          },
        });
      });
    });
  } catch (err) {
    res.send(err);
  }
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
    jwt: token.toJwt(),
  });
});

const server = app.listen(process.env.PORT || 3001, function () {
  console.log('Programmable Video Chat token server listening on port 3001!');
});
var io = socket(server);
const MsgIo = require('./controller/MsgIoController');
MsgIo(app, io);

// const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app;
