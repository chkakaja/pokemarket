import React, { Component } from 'react';
import FacebookButton from './FacebookButton.jsx';
import SearchBar from './SearchBar.jsx';
import Signin from './Signin.jsx';
import SellItem from './SellItem.jsx'
import Router from 'react-router';
import MessageBox from './MessageBox.jsx';
import Item from './Item.jsx';
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
      <div className='app'>
        <h2>TITLE</h2>
        <ul>
          <li><Link to="landing">Home</Link></li>
          <li><Link to="sellitem">Sell an Item</Link></li>
          <li><Link to="item">Item</Link></li>
          <li><Link to="message">Messages</Link></li>
          <li><SearchBar /></li>
          <li><Link to="signin">Signin</Link></li>
          {this.props.children}
        </ul>  
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
    getUser: checkAuthentication(dispatch)
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Navbar);


