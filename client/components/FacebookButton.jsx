import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
 
class FacebookButton extends Component {
  render() {
    return (
      <div>
        <a href='/auth/facebook'> Facebook
          <div class="fb-login-button" data-max-rows="1" data-size="xlarge" data-show-faces="false" data-auto-logout-link="true"></div>
        </a>
      </div>
    );
  }
}

module.exports = FacebookButton;
