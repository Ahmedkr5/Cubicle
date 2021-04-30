const mongoose = require('mongoose')
const message = require("../models/message")
var multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const MsgIoController = (app, io) => {
    app.get('/api/:transmitter', async (req, res) => {
        const findMessages = await message.find({ $or: [{ "transmitter": req.params.transmitter }, { "receiver": req.params.transmitter }] })
        res.status(201).json(findMessages);

    });
    io.of('').on('connect',async  (socket)=> {
        //socket.broadcast.emit('send-client', 'hi')
         //console.log('ok')


        try {
            socket.on('msg', async msg => {
                const findMessages1 = await message.find({ $or: [{ "transmitter": msg.transmitter }, { "receiver": msg.transmitter }] });
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
                const newMessage = await messagem.save();

                const findMessages2 = await message.find({ $or: [{ "transmitter": msg.transmitter }, { "receiver": msg.transmitter }] })

                //io.emit('msg', { chats: findMessages2 });
                socket.broadcast.emit('push', findMessages2);


            });


        } catch (err) { console.log(err) }
        socket.on('typing', message=> {

            var data = message ;
            //
            socket.broadcast.emit('typingC', [data.transmitter,data.receiver,data.image,data.nom]);
          //  console.log(msg)

            //io.emit('typingC', { msg: msgs });
        });
        socket.on('disconnect', () => {
              // console.log('disconnected');
        });
    });

}
module.exports = MsgIoController