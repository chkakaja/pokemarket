import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default props => {
  return (
    <div> 
      <span style={{'fontWeight': 'bold'}}>{ (props.userId === props.msg.sender ? 'You' : props.receiverName) + ': '}</span>{props.msg.message}
    </div>
  );
};

