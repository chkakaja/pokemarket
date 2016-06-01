var http = require('./app.js')
var db = require('./db/config');
var Message = require('./db/models/message.js');
var io = require('./app.js').io;

io.on('connection', socket => {
  console.log('socket connected');
  socket.on('join', data => {
    socket.join(data.userId);
    console.log('user joined room', data.userId);
  });

  socket.on('message', msg => {
    console.log('message received');
    io.sockets.in(msg.receiver).emit('new_msg', msg);
    new Message(msg).save();
  });
});

