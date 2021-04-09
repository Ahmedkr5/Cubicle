const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String ,
        required: true
    },
    email: {
        type: String ,
        required: true
    },
    password: {
        type: [String] ,
        required: true,
      
    },
    cv: {
        type: [String] ,
        required: true
    },
    datenaissance: {
        type: Date ,
        required: true
    },
    photo: {
        type: String ,
        default:'1.jpg'
    },

})
module.exports = mongoose.model('user2',userSchema)