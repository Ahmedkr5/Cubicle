const user = require("../models/user")

class User{
    getAll= async (req , res)=>{
        try{
            const users = await user.find()
            res.json(users)
        }catch(error){
            res.status(500).json({message : error})
        }
    }



    getSingle = async (req,res)=>{
      
        try {
            const finduser = await user.find({  "_id": req.params.id })
            if(finduser== null ){
                return res.status(404).json({message: 'cant find user'})
            }
           return res.status(201).json(finduser)
            
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }
}
const testingApp = new User() ;
module.exports = testingApp