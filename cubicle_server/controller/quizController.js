const quiz = require("../models/quiz")

class App{
    getAll= async (req , res)=>{
        try{
            const quizzes = await quiz.find()
            res.json(quizzes)
        }catch(error){
            res.status(500).json({quiz : error})
        }
    }
     createQuiz =  async (req,res)=>{
        const quizm = new quiz({
            id: req.body.id,
            starter: req.body.starter,
            question: req.body.question,
            allAnswers: req.body.allAnswers,
            correctAnswer: req.body.correctAnswer            
        })
        try {
            const newQuiz = await quizm.save()
            res.status(201).json(newQuiz)           
        } catch (error) {
            res.status(400).json({quiz : error.quiz})
        }
    }

    updateQuiz =  async (req,res)=>{
        const updateQuiz = await quiz.findByIdAndUpdate(req.params.id,{

            id: req.body.starter,
            starter: req.body.starter,
            question: req.body.question,
            allAnswers: req.body.allAnswers,
            correctAnswer: req.body.correctAnswer 

        },{useFindAndModify:true , new : true})
        if(updateQuiz){
            res.json({QUiz: 'Update ok '})
        }
    }
    getSingle = async (req,res)=>{
        const id = ""
        const starter = ""
        const question = ""
        const allAnswers = ""
        const correctAnswer = ""

        try {
            const findQuizzes = await quiz.find({ "id": id})
            if(findQuizzes == null ){
                return res.status(404).json({quiz: 'Cant find Quiz'})
            }
            res.status(201).json(findQuizzes)
            
        } catch (err) {
            res.status(400).json({quiz: err.quiz})
        }
    }
}
const testingApp = new App() ;
module.exports = testingApp