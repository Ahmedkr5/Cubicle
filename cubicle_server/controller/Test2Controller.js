var express = require('express');
var router = express.Router();

var Test2 =require('../models/Test2')
var User = require('../user/User');

//create a group
router.post('/test', function (req, res,next) {
    Test2.create({
        groupname : req.body.groupname,
       
        }, 
        function (err, Test2) {
            if (err) return res.status(500).send("error group");
            
            res.send(Test2);
        
        });
      
});


//Get group listing
router.get('/Testlist', function (req, res, next) {
    Test2.find(
        (err, test) =>{
        if (err) 
        res.send("err")
        else
        res.send(test);
        
    });
});



















module.exports = router;