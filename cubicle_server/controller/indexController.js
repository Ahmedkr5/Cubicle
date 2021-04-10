const message = require("../models/message")

class App{
    getAll= async (req , res)=>{
        try{
            const messages = await message.find()
            res.json(messages)
        }catch(error){
            res.status(500).json({message : error})
        }
    }
     createMessage =  async (req,res)=>{
     
        const messagem = new message({
            transmitter: req.body.transmitter,
            receiver: req.body.receiver,
            body: req.body.body,
            file: req.body.file,
            created_at: req.body.created_at,
            deleted_trans: req.body.deleted_trans,
            deleted_recived: req.body.deleted_recived
            
        })
        try {
            const newMessage = await messagem.save()
            res.status(201).json(newMessage)           
        } catch (error) {
            res.status(400).json({message : error.message})
        }
    }

    updateMessage =  async (req,res)=>{
        const updateMessage = await message.findByIdAndUpdate(req.params.id,{

            deleted_trans: req.body.deleted_trans,
            deleted_recived: req.body.deleted_recived

        },{useFindAndModify:true , new : true})
        if(updateMessage){
            res.json({message: 'updated ok '})
        }
    }
    getSingle = async (req,res)=>{
     
        try {
            const findMessages = await message.find( { $or: [ { "transmitter": req.params.transmitter }, { "receiver":req.params.transmitter }] })
           
            if(findMessages == null ){
                return res.status(404).json({message: 'cant find message'})
            }
            res.status(201).json(findMessages)
            
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }
}
const testingApp = new App() ;
module.exports = testingApp