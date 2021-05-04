const mongoose = require('mongoose')
const quizSchema = new mongoose.Schema({
    starter: {
        type: String ,
        required: true
    },
    question: {
        type: String ,
        required: true
    },
    allasnswers: {
        type: [String] ,
        required: true,
    },
    correctanswer: {
        type: String ,
        required: true
    },

})
module.exports = mongoose.model('quiz',quizSchema)