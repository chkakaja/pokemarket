import io from 'socket.io-client';

var socket = io();

socket.on('message', msg => {

});

var join = function(userId) {
  socket.emit('join', {userId: userId});
};

var sendMessage = function(sender, receiver, text) {
  var msg = {
    message: text,
    sender,
    receiver
  };
  socket.emit('message', msg);
};

export { socket, join, sendMessage };
