import React, { Component } from 'react';
import store from './store';
import io from 'socket.io-client';

var socket = io();

socket.on('message', json => {
  store.dispatch({  type: 'GOT_MESSAGE', 
                    message: json.message, 
                    name: json.name });
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
