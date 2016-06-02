import React, { Component } from 'react';
import FacebookButton from './FacebookButton.jsx';
import SearchBar from './SearchBar.jsx';
import Signin from './Signin.jsx';
import SellItem from './SellItem.jsx'
import Router from 'react-router';
import MessageBox from './MessageBox.jsx';
import Item from './Item.jsx';
import WatchedItems from './WatchedItems.jsx';
import store from '../store.js';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import { connect } from 'react-redux';
import { checkAuthentication } from '../actions.js';

export default class Navbar extends React.Component {
  
  componentDidMount() {
    this.props.getUser();
    console.log('navbar rendered');
  }

  render() {
  	return (
      <div className='nav'>
        <div className='search'>
          <div className='pure-u-1-1 navlink'><SearchBar /></div>
        </div>
        <div className='links'>
          <Link to="landing"><div className='pure-u-1-8 navlink'>Home</div></Link>
          <Link to="sellitem"><div className='pure-u-1-8 navlink'>Sell an Item</div></Link>
          <Link to="item"><div className='pure-u-1-8 navlink'>Item</div></Link>
          <Link to="watcheditems"><div className='pure-u-1-8 navlink'>Watched Items</div></Link>
          <Link to="message"><div className='pure-u-1-8 navlink'>Messages</div></Link>
          <a href='auth/facebook'><div className='pure-u-1-8 navlink'>Connect with Facebook</div></a>
          <a href='signout'><div className='pure-u-1-8 navlink' onClick={this.props.logoutUser}>Sign Out</div></a>
        </div>
      </div>
    ); 
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    activeMessages: state.messages.active,
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
