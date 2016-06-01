import React, { Component, Proptypes } from 'react';
import MessageBox from './MessageBox.jsx';
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Navbar from './Navbar.jsx';

export default class App extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className='app'>
         <Navbar />
      </div>
    );
  }
}

module.exports = App;
