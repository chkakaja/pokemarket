import React, { Component, Proptypes } from 'react';
import MessageBox from './MessageBox.jsx';
import FacebookButton from './FacebookButton.jsx';
import Signin from './Signin.jsx';
import SellItem from './SellItem.jsx'
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

export default class App extends Component {
   render() {
    return (
      <div className='app'>
        <h2>TITLE</h2>
        <div>NAV BAR GOES HERE</div>
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
