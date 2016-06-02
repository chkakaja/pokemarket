import React, { Component, Proptypes } from 'react';
import MessageBoxes from './MessageBoxes.jsx';
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Navbar from './Navbar.jsx';

export default class App extends Component {
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
