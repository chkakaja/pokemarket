import React, { Component, Proptypes } from 'react';
import MessageBoxes from './MessageBoxes.jsx';
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Navbar from './Navbar.jsx';
import { connect } from 'react-redux';
import { checkAuthentication } from '../actions.js';

export default class App extends Component {
  componentWillMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className='app'>
       <Navbar />
       {this.props.children}
       <MessageBoxes />
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    getUser: checkAuthentication(dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);