var express = require('express');
var router = express.Router();

var Group =require('../models/group');
var Business =require('../models/Business/business.js');
var User = require('../user/User');

//create a group
router.post('/newgroup', function (req, res,next) {
    Group.create({
        groupname : req.body.groupname,
        Owner: req.body.id,  
        }, 
        function (err, Group) {
            if (err) return res.status(500).send("error group");
            
            res.send(Group);
        
        });
      
});

//find a group
router.get('/group/:idgr', function (req, res, next) {
    Group.findById(req.params.id,function(err,Group){
        if(err) 
        res.send("error");
        else
        res.send(Group);
        
    });
});

// update group in user
router.put('/:id/newgroup', function (req, res) {

    User.findByIdAndUpdate(req.params.id,{
    
          });
          
        
});




//Get group listing
router.get('/businesslist', function (req, res, next) {
    Business.find(
        (err, businesses) =>{
        if (err) 
        res.send("err")
        else
        res.send(businesses);
        
    });
});




















module.exports = router;