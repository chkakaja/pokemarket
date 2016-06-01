import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

class FacebookButton extends Component {
  render() {
    return (
      <div>
        <a href='/auth/facebook'>
          <img src="https://www.westsiderentals.com/images/fbconnect.png" width="200" height="40" />
        </a>
      </div>
    );
  }
}


module.exports = FacebookButton;
