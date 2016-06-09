var http = require('./server.js')
var db = require('./initialize/db-init.js');
var Message = require('./models/message.js');
var io = require('./server.js').io;
var User = require('./models/user.js');

io.on('connection', socket => {
  socket.on('join', data => {
    socket.join(data.userId);
  });

  socket.on('message', msg => {
    User
      .where({ id: msg.sender })
      .fetch()
      .then(user => {
        var json = {
          message: msg,
          name: user.attributes.name
        };
        io.sockets.in(msg.receiver).emit('message', json);
        new Message(msg).save();
      });
  });
});
