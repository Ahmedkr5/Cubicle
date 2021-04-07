const mongoose = require('mongoose');
const FriendshipSchema = new mongoose.Schema({
    requester: {
        type: int,
        required: true
    },
    recipient: {
        type: int,
        required: true
    },
    status: {
        type: int,
        required: true
    },
     });
     module.exports = mongoose.model('Friendship',messageSchema);