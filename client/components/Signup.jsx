import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FacebookButton from '/FacebookButton';

class Signup extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div className='signup'>
        Sign up for an account using your Facebook account:
        <FacebookButton fb={FB} />
        <Link to='/signin'>Already have an account? Sign in.</Link>
      </div>
    );
  }
}

ReactDOM.render(
   <Signup />,
   document.getElementById('app')
);

window.Signup = Signup;
