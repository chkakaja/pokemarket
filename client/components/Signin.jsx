import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FacebookButton from './FacebookButton.jsx';

class Signin extends Component {
  render () {
    return (
      <div className='signin'>
        Sign in or register using Facebook:
        <FacebookButton />
      </div>
    );
  }
}

module.exports = Signin;
