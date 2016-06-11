import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default props => {
  return (
    <div>
      <div className={props.userId === props.msg.sender ? 'from-me' : 'from-them'}>
        {props.msg.message.slice(-6) === 'init=0' ? <span>I'd like to haggle! Click <a className="message-link" href={props.msg.message} target="_blank">here</a> to respond.</span> : props.msg.message}
      </div>
      <div className="clear"></div>
    </div>
  );
};