import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default props => {
  return (
    <div>
      <div className={props.userId === props.msg.sender ? 'from-me' : 'from-them'}>
        {props.msg.message}
      </div>
      <div className="clear"></div>
    </div>
  );
};

