const mongoose = require('mongoose')
const message = require("../models/message")
var multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})
const MsgIoController = (app, io) => {
    app.get('/api/:transmitter', async (req, res) => {
        const findMessages = await message.find({ $or: [{ "transmitter": req.params.transmitter }, { "receiver": req.params.transmitter }] })
        res.status(201).json(findMessages);

    });
    io.on('connect', function (socket) {
        //console.log('connected');
        socket.on('typing', async msg => {
          //  console.log(msg);
            socket.broadcast.emit('typing', { msg: msg.name });
        });
  

    try {
        socket.on('msg', async msg => {
            const findMessages1 = await message.find({ $or: [{ "transmitter": msg.transmitter }, { "receiver": msg.transmitter }] }) ;
            io.emit('msg', { chats: findMessages1 });

            const date = new Date();
   
      

     

            const messagem = new message({
                transmitter: msg.transmitter,
                receiver: msg.receiver,
                body: msg.body,
                file: msg.file,
                created_at: Date.now(),
                deleted_trans: msg.deleted_trans,
                deleted_recived: msg.deleted_recived

            });
            const newMessage = await messagem.save() ;

            const findMessages2 = await message.find({ $or: [{ "transmitter": msg.transmitter }, { "receiver": msg.transmitter }] })

            //io.emit('msg', { chats: findMessages2 });
            socket.broadcast.emit('push', findMessages2 );


        });

    } catch (err) { console.log(err) }
    socket.on('typing', name => {
        io.emit('typing', { name: '${name.name}' });
    });
    socket.on('disconnect', () => {
    //    console.log('disconnected');
    });
});

}
module.exports = MsgIoController