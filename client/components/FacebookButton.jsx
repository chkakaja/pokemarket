import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

class FacebookButton extends Component {
  createButton() {
    return { __html: '<div class="fb-login-button" data-max-rows="1" data-size="xlarge" data-show-faces="false" data-auto-logout-link="true"></div>' };
  }
  render() {
    return (
      <div>
        <a href='/auth/facebook'>
          <div dangerouslySetInnerHTML={this.createButton()} ></div>
        </a>
      </div>
    );
  }
}

module.exports = FacebookButton;
