import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

class FacebookButton extends Component {
  render() {
    return (
      <div>
        <a href='/auth/facebook'>
          <img src="http://kannadasanpathippagam.com/UAT/image/login-with-facebook.png" width="300" height="60" />
        </a>
      </div>
    );
  }
}

module.exports = FacebookButton;
