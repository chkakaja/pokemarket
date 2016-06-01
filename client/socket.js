import io from 'socket.io-client';
import store from './store';

var socket = io();

socket.on('message', msg => {
  store.dispatch({  type: 'GOT_MESSAGE', 
                    message: msg });
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
