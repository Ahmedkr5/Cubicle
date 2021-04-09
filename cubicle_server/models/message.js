const mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;
const messageSchema = new mongoose.Schema({
    transmitter: {
        type: Object,
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