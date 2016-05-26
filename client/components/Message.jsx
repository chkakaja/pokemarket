import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

var Message = props => {
  return (
    <div>{props.msg.message}</div>
  );
};

module.exports = Message;