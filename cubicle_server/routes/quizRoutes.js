const express = require('express');
const router = express.Router();
const quizController = require('../controller/quizController');
/* GET home page. */
router.get('/quiz', quizController.getAll)
router.post('/quiz/create',quizController.createQuiz)
router.patch('/quiz/update/:id',quizController.updateQuiz)
router.get('/quiz/show/:id',quizController.getSingle)

module.exports = router;
