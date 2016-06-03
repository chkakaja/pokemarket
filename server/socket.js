var http = require('./app.js')
var db = require('./db/config');
var Message = require('./db/models/message.js');
var io = require('./app.js').io;
var User = require('./db/models/user.js');

io.on('connection', socket => {
  socket.on('join', data => {
    socket.join(data.userId);
    console.log('joined', data.userId);
  });

  socket.on('message', msg => {
    console.log('message sent', msg);
    User
      .where({ id: msg.sender })
      .fetch()
      .then(user => {
        console.log(user);
        var json = {
          message: msg,
          name: user.attributes.name
        };
        io.sockets.in(msg.receiver).emit('message', json);
        new Message(msg).save();
      });
  });
});
