var express = require('express');
var router = express.Router();

var Business =require('../models/Business/business')
var User = require('../user/User');

//create a group
router.post('/business', function (req, res,next) {
    Business.create({
        name : req.body.name,
        }, 
        function (err, Business) {
            if (err) return res.status(500).send("error group");
            
            res.send(Business);
        
        });
      
});


//Get group listing
router.get('/businesslist', function (req, res, next) {
    Business.find(
        (err, test) =>{
        if (err) 
        res.send("err")
        else
        res.send(test);
        
    });
});

router.put('/business/:id', function (req, res) {

    Business.findByIdAndUpdate(req.params.id,{
        name : req.body.name,
        members : req.body.members,
    }, 
    function (err, Business) {
        if (err) return res.status(500).send("error updating business");
        console.log(res);
        res.send(Business +'business modified');
          });
          
        
});


module.exports = router;