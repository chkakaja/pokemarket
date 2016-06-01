import React, { Component, Proptypes } from 'react';
import MessageBox from './MessageBox.jsx';
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Navbar from './Navbar.jsx';

export default class App extends Component {
   render() {
    return (
      <div className='app'>
         <Navbar />
        <h2>TITLE</h2>
        <Link to="landing">Landing</Link>
        <Link to="sellitem">Sell an Item</Link>
        <Link to="message">Messages</Link>
        <Link to="item">Item</Link>
        <Link to="signin">Sign in</Link>
        {this.props.children}
      </div>
    );
  }
}

module.exports = App;
