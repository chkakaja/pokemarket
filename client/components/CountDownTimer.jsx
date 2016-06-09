import React, { Component, PropTypes } from 'react';
import CountDown from 'react-count-down';

export default props => {
  var options = {
    endDate: props.endDate
  };
  return (   
    <div className="countdown-timer">
      {props.endDate ? <CountDown options={options} /> : ''}
    </div>
  );
};