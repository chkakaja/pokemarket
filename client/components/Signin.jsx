import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FacebookButton from '/FacebookButton';
import Link from 'react-router';

class Signin extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div className='signin'>
        Sign in using your Facebook account:
        <FacebookButton fb={FB} />
        <Link to='/signup'>Don't have an account? Sign up for one.</Link>
      </div>
    );
  }
}

ReactDOM.render(
   <Signin />,
   document.getElementById('app')
);

window.Signin = Signin;
