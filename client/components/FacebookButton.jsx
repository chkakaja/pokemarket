import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
 
const responseFacebook = (response) => {
  console.log(response);
}
 
class FacebookButton extends Component {
  render() {
    return (
      <a href="/auth/facebook">Login with Facebook</a>
    )
  };
}

module.exports = FacebookButton;
