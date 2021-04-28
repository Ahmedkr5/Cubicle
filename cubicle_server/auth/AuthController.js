const express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../user/User');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
var VerifyToken = require('./VerifyToken');
const passport = require('passport')

router.post('/register', function(req, res) {
  
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    User.create({
      firstname : req.body.firstname,
      lastname : req.body.lastname,
      email : req.body.email,
      profileimage : "default profile image",
      coverimage : "default cover image",
      datenaissance : req.body.datenaissance,
      password : hashedPassword,
      }
    ,
    function (err, user) {
      if (err) return res.status(500).send(err)
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({user});
    }); 
  });

  router.get('/me', VerifyToken, function(req, res, next) {

    User.findById(req.userId, { password: 0 }, function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      
      res.status(200).send(user);
    });
    
  });

  router.post('/login', function(req, res) {

    User.findOne({ email: req.body.email }, function (err, user) {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');
      
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
      
      var token = jwt.sign({ id: user._id ,firstname:user.firstname,lastname:user.lastname,email:user.email,adresse:user.adresse,phone:user.phone,birthday:user.datenaissance,description:user.description }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      
      res.status(200).send({ auth: true, token: token });
    });
    
  });

  router.get('/logout', function(req, res) {
    res.status(200).send({ auth: false, token: null });
  });

  router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']}));
  
  // Google Oauth2 callback url
  router.get('/google/callback', passport.authenticate('google'), (req, res, next) => {
    res.redirect("http://localhost:3001/" + req.user.id);
  });
  router.use(function (user, req, res, next) {
    res.status(200).send(user);
  });
  
  module.exports = router;
