const mongoose = require('mongoose')
const quizSchema = new mongoose.Schema({
    id: {
        type: String ,
        required: true
    },
    starter: {
        type: String ,
        required: true
    },
    question: {
        type: String ,
        required: true
    },
    allAnswers: {
        type: [String] ,
        required: true,
    },
    correctAnswer: {
        type: String ,
        required: true
    },

})
module.exports = mongoose.model('quiz',quizSchema)