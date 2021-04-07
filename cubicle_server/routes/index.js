const express = require('express');
const router = express.Router();
const IndexController = require('../controller/indexController');
const PostController = require('../controller/postController');
var VerifyToken = require('../auth/VerifyToken');
/* GET home page. */
router.get('/', IndexController.getAll);
router.post('/create', IndexController.createMessage);
router.patch('/update/:id', IndexController.updateMessage);
router.get('/show/:receiver', IndexController.getSingle);

router.get('/getPosts', PostController.getAll);
router.post('/createPost', PostController.createPost);

module.exports = router;
