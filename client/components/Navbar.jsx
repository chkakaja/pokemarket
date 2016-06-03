import React, { Component } from 'react';
import FacebookButton from './FacebookButton.jsx';
import SearchBar from './SearchBar.jsx';
import Signin from './Signin.jsx';
import SellItem from './SellItem.jsx'
import MessageBox from './MessageBox.jsx';
import Item from './Item.jsx';
import WatchedItems from './WatchedItems.jsx';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import { connect } from 'react-redux';
import { checkAuthentication } from '../actions.js';


export default class Navbar extends React.Component {
  
  componentDidMount() {
    this.props.getUser();
  }

  // WHEN PERSONAL PROFILE IS DONE, ADD THE FOLLOWING CODE BELOW THE MESSAGES DIV
  // <Link to="personalprofile"><div className='pure-u-1-6 navlink'>Personal Profile</div></Link>
  render() {
    if (this.props.user.id !== null) {
    	return (
        <div className='nav'>
          <div className='search'>
            <div className='pure-u-1-1 navlink'><SearchBar /></div>
          </div>
          <div className='links'>
            <Link to="landing"><div className='pure-u-1-6 navlink'>Home</div></Link>
            <Link to="sellitem"><div className='pure-u-1-6 navlink'>Sell an Item</div></Link>
            <Link to="message"><div className='pure-u-1-6 navlink'>Messages</div></Link>
            <p className='pure-u-1-6 empty-navlink'></p>
            <p className='pure-u-1-6 navlink'>**PERSONAL PROFILE**</p>
            <a href='signout'><div className='pure-u-1-6 navlink' onClick={this.props.logoutUser}>Sign Out</div></a>
          </div>
        </div>
      )
    } else {
      return (
        <div className='nav'>
          <div className='search'>
            <div className='pure-u-1-1 navlink'><SearchBar /></div>
          </div>
          <div className='links'>
            <Link to="landing"><div className='pure-u-1-6 navlink'>Home</div></Link>
            <p className='pure-u-2-3 empty-navlink'></p>
            <a href='auth/facebook'><div className='pure-u-1-6 navlink'>Connect with Facebook</div></a>
          </div>
        </div>
      )
    }
  }
};

var mapStateToProps = function(state, ownProps) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    getUser: checkAuthentication(dispatch),
    logoutUser: checkAuthentication({ type: 'LOGOUT_USER' })
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Navbar);
