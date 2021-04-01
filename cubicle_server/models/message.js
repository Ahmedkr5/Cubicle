const mongoose = require('mongoose')
const messageSchema = new mongoose.Schema({
    transmitter: {
        type: String ,
        required: true
    },
    receiver: {
        type: String ,
        required: true
    },
    body: {
        type: String ,
        required: true
    },
    file: {
        type: [String] ,
        required: false,
        default:null
    },
    created_at: {
        type: Date,
        required: true
    },
    deleted_trans: {
        type: Boolean ,
        required: true
    },
    deleted_recived: {
        type: Boolean ,
        required: true
    },

})
module.exports = mongoose.model('message',messageSchema)