var express = require('express');
var router = express.Router();

var Business =require('../models/Business/business')
var User = require('../user/User');

//create a group
router.post('/business', function (req, res,next) {
    Business.create({
        name : req.body.name,
        Owner: req.body.owner,
        members: req.body.members
        }, 
        function (err, Business) {
            if (err) return res.status(500).send("error group");
            
            res.send(Business);
        
        });
      
});

router.post('/:id/newbusiness', function (req, res,next) {
    Business.create({
        name : req.body.businessname,
        Owner: req.params.id,  
        }, 
        function (err, gr) {
            if (err) return res.status(500).send("error group");
            
            res.send(gr);
        
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

router.get('/businesslist/:id', async function (req, res, next) {
     
        try {
            const findMembers = await Business.find( { members: req.params.id } )
           console.log(req.params.id);
            if(findMembers == null ){
                return res.status(404).json({message: 'cant find businesses'})
            }
            console.log(findMembers);
            return res.status(200).json(findMembers)
            
        } catch (err) {
            return res.status(400).json({message: err.message})
        }
});

router.put('/business/:id', function (req, res) {

    Business.findByIdAndUpdate(req.params.id,{
        name : req.body.name,
        Owner: req.body.owner,
        members : req.body.members,
    }, 
    function (err, Business) {
        if (err) return res.status(500).send("error updating business");
        console.log(res);
        res.send(Business +'business modified');
          });
          
        
});


module.exports = router;