import React, { Component } from 'react';
import FacebookButton from './FacebookButton.jsx';
import SearchBar from './SearchBar.jsx';
import Signin from './Signin.jsx';
import SellItem from './SellItem.jsx'
import Router from 'react-router';
import MessageBox from './MessageBox.jsx';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';


export default class Navbar extends React.Component {
  

  render() {
  	return (
          <div className='app'>
            <h2>TITLE</h2>
            <ul>
              <li><Link to="landing">Home</Link></li>
              <li><Link to="sellitem">Sell an Item</Link></li>
              <li><Link to="message">Messages</Link></li>
              <li><SearchBar /></li>
              <li><Link to="signin">Signin</Link></li>
              {this.props.children}
            </ul>  
          </div>
	   ) 
    };
  }

module.exports = Navbar;


