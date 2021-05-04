var express = require('express');
var router = express.Router();

var Group =require('../models/group')
var User = require('../user/User');

//create a group
router.post('/:id/newgroup', function (req, res,next) {
    Group.create({
        groupname : req.body.groupname,
        Owner: req.params.id,  
        }, 
        function (err, Group) {
            if (err) return res.status(500).send("error group");
            
            res.send(Group);
        
        });
      
});

//find a group
router.get('/group/:idgr', function (req, res, next) {
    Group.findById(req.params.idgr,function(err,Group){
        if(err) 
        res.send("error");
        
        else
        res.send(Group);
        
    });
});




// update group in user
router.put('/group/:idgr', function (req, res) {

    Group.findByIdAndUpdate(req.params.idgr,{
        groupname : req.body.groupname,
        description : req.body.description,
    }, 
    function (err, Group) {
        if (err) return res.status(500).send("error updating group group");
        
        res.send(Group +'group modified');
          });
          
        
});
router.put('/GroupProfile/:idgr', function (req, res) {
    Group.findByIdAndUpdate(req.params.idgr,{
        groupimage : req.body. groupimage,}, {new: true}, function (err, group) {         
          res.status(200).send(group);
});
});




// deleteing  a group
router.delete('/delete/:idgr', function (req, res) {
    Group.findByIdAndRemove(req.params.idgr, function (err, group) {
        if (err) return res.status(500).send("There was a problem deleting the group.");
        res.status(200).send("group " + group.groupname + " deleted.");
    });
});


//Get group listing
router.get('/grouplist', function (req, res, next) {
    Group.find(
        (err, groups) =>{
        if (err) 
        res.send("err")
        else
        res.send(groups);
        
    });
});



















module.exports = router;