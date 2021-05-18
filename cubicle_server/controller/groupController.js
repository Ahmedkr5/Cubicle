var express = require('express');
const group = require('../models/group');
var router = express.Router();

var Group =require('../models/group')
var User = require('../user/User');

//create a group
router.post('/:id/newgroup', function (req, res,next) {
    Group.create({
        groupname : req.body.groupname,
        description: req.body.description,
        Owner: req.params.id,
        members :req.params.id,
        }, 
        function (err, gr) {
            if (err) return res.status(500).send("error group");
            
            res.send(gr);
        
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
router.put('/GroupCover/:idgr', function (req, res) {
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

router.put('/deletemem/:id', function (req, res) {
    Group.findByIdAndUpdate(req.params.id,{ $pull: {"group.members" :{}}},{safe :true}, function (err, group) {
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



router.get('/grouplist/:id', async function (req, res, next) {
     
    try {
        const findMembers = await Group.find( { members: req.params.id } )
       
        if(findMembers == null ){
            return res.status(404).json({message: 'cant find group'})
        }
        
        return res.status(200).json(findMembers)
        
    } catch (err) {
        return res.status(400)

    }
});

router.get('/groupowned/:id', async function (req, res, next) {
     
    try {
        const findMembers = await Group.find( { Owner: req.params.id } )
       
        if(findMembers == null ){
            return res.status(404).json({message: 'cant find group'})
        }
        
        return res.status(200).json(findMembers)
        
    } catch (err) {
        return res.status(400)

    }
});

/*
router.post('/group/:id', authenticate, (req, res) => {
    var member = req.body.me;
    var todo = new Todo();

    todo.content.push(content);

    todo.save(function(err) {
      if (err) throw err;
      res.json(todo.toJSON())
      //I am sending instead of sending the result for testing 
    });

});*/



router.put('/groupmem/:id', function (req, res) {

    Group.findByIdAndUpdate(req.params.id,{
        members:req.body.members
    }, 
    function (err, Group) {
        if (err) return res.status(500).send("error updating group group");
        
        res.send(Group +'group modified');
            
    });
});
        


router.get('/a/:gpname', function (req, res) {
    Group.find({groupname: new RegExp(req.params.grpname, 'i')}, function (err, user) {         
          res.status(200).send(user);
});
});

module.exports = router;