var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var jwt = require('jsonwebtoken');
var config = require('../config');
var request = require('request');

var User = require('./User');
var Payment = require('./Payment');


router.post('/checkpayment', function (req, res) {
    request({
        headers: {
          'Authorization' :'Token 16a40ef7750cbf8ce3668ef24c1e331de1e96c6f'    },
        uri: 'https://sandbox.paymee.tn/api/v1/payments/'+req.body.tokens+'/check',
        method: 'GET'
      }, function (err, ress, body) {
        var results = JSON.parse(body);
        if(results.status)
        { 
            Payment.findOne({token : results.data.token},function (err, payment) {
                if (payment) {
                    return  res.status(201).send("Payment already exist")

                }else{
                    Payment.create({
                        payment_status: results.data.payment_status,
                 token: results.data.token,
                 amount: results.data.amount,
                 transaction_id: results.data.transaction_id,
                 buyer_id: results.data.buyer_id,});
                    User.findById(req.body.userid, function (err, user) {
                   Coinss = parseInt(user.Coins) + parseInt(results.data.amount)*10
                    User.findByIdAndUpdate(req.body.userid,{
                     Coins : Coinss,}, {new: true}, function (err, user) {         
             });
                 });
                            
                             return  res.status(200).send(results.data)

                } ;
            })
           
    }else{
        return  res.status(202).send("Paymee error")

    };
       
    });
});
// CREATES A NEW USER
router.post('/', function (req, res) {
    User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            datenaissance: req.body.datenaissance,
        }, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ user.name +" was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    User.findByIdAndUpdate(req.params.id,{
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.emeail,
        adresse : req.body.adresse,
        phone : req.body.phone,
        description : req.body.description,
        datenaissance : req.body.birthday,
        password : hashedPassword,}, {new: true}, function (err, user) {
        var token = jwt.sign({ id: user._id ,firstname:user.firstname,lastname:user.lastname,email:user.email,adresse:user.adresse,phone:user.phone,birthday:user.datenaissance,description:user.description }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
          });
          
          res.status(200).send({ auth: true, token: token });
});
});
router.put('/profile/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id,{
        profileimage : req.body.profileimage,}, {new: true}, function (err, user) {         
            var token = jwt.sign({ id: user._id ,profileimage:user.profileimage,firstname:user.firstname,lastname:user.lastname,email:user.email,adresse:user.adresse,phone:user.phone,birthday:user.datenaissance,description:user.description }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
              });
              res.status(200).send({ auth: true, token: token });
    });
    });

router.put('/cover/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id,{
        coverimage : req.body.coverimage,}, {new: true}, function (err, user) {         
          res.status(200).send(user);
});
});
router.put('/coins/:id', function (req, res) {

   User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
      Coinss = parseInt(user.Coins) + parseInt(req.body.coins)*10
           User.findByIdAndUpdate(req.params.id,{
        Coins : Coinss,}, {new: true}, function (err, user) {         
          res.status(200).send(user);
});
    });
});

router.get('/a/:name', function (req, res) {
    User.find({firstname: new RegExp(req.params.name, 'i')}, function (err, user) {         
          res.status(200).send(user);
});
});
    


module.exports = router;