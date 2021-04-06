var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Experience = require('./Experience');
var VerifyToken = require('../auth/VerifyToken');

// CREATES A NEW Experience
router.post('/', function (req, res) {
    Experience.create({
            title : req.body.title,
            description : req.body.description,
            date : req.body.date,
            userid : req.body.userid,
        }, 
        function (err, experience) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(experience);
        });
});

// GETS EXPERIENCE BY USERID
router.get('/:id', function (req, res) {
    var query = { userid: req.params.id };
    Experience.find(query, function (err, exp) {
        if (err) return res.status(500).send("There was a problem finding experiences.");
        if (!exp) return res.status(404).send("No experience for this user.");
        res.status(200).send(exp);
    });
});


module.exports = router;