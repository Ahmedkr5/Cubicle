const express = require('express');
const router = express.Router();
const IndexController = require('../controller/indexController');
/* GET home page. */
router.get('/', IndexController.getAll)
router.post('/create',IndexController.createMessage)
router.patch('/update/:id',IndexController.updateMessage)
router.get('/show/:receiver',IndexController.getSingle)

module.exports = router;
