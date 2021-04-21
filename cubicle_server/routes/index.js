const express = require('express');
const router = express.Router();
const IndexController = require('../controller/indexController');
const PostController = require('../controller/postController');
const userController = require('../controller/userController');



var VerifyToken = require('../auth/VerifyToken');
/* GET home page. */
router.get('/', IndexController.getAll);
router.post('/create', IndexController.createMessage);
router.patch('/update/:id', IndexController.updateMessage);
router.get('/show/:transmitter', IndexController.getSingle );
router.post('/upload/:date', IndexController.uploada);

router.get('/getPosts', PostController.getAll);
router.post('/createPost', PostController.createPost);
router.get('/allUsers', userController.getAll);
router.get('/showUser/:id', userController.getSingle );

module.exports = router;
