const message = require("../models/message")
var multer = require('multer')
var d = Date.now() ;
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  
  filename: function (req, file, cb) {
      const aa =  req.params.date ;
    cb(null, aa+ '-' +file.originalname )
   
  }
})
var upload = multer({ storage: storage }).single('file')


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

        const date = new Date() ;
     
        const messagem = new message({
            transmitter: req.body.transmitter,
            receiver: req.body.receiver,
            body: req.body.body,
            file: req.body.file,
            created_at: date,
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
            return res.status(201).json(findMessages)
            
        } catch (err) {
            return res.status(400).json({message: err.message})
        }
    }
    uploada = (req,res,err)=>{
        console.log(this.filename);

 if(   upload(req, res,err ) )  return res.status(200).json({message: d})
 else if(1==1) return res.status(200).json({message: d}) ; 
}
}
const testingApp = new App() ;
module.exports = testingApp