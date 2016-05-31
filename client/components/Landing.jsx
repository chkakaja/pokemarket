import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FacebookButton from './FacebookButton.jsx';

class Landing extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div className='landing'>
        Landing page
      </div>
    );
  }
}

module.exports = Landing;
