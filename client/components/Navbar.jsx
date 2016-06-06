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
  
  renderAuth() {
    if (this.props.user.id) {
      return (<a href="signout"><div className='navlink' style={{width: '7%', display: 'inline-block'}}><img style={{marginTop: '12px', marginLeft: '5px'}} src="images/setting.png" width="40px" /></div></a>);
    } else {
      return (<a href='auth/facebook'><div className='pure-u-1-6 navlink' style={{width: '7%', display: 'inline-block'}}><img style={{marginTop: '12px', marginLeft: '5px'}} src="images/facebook.png" width="40px" /></div></a>);
    }
  }

  renderProfilePic() {
    if (this.props.user.id) {
      return (<Link to="profile"><div className='navlink' style={{width: '7%', display: 'inline-block'}}><img style={{marginTop: '12px', marginLeft: '5px', borderRadius:'50%', border: '2px solid white' }} width="40px" height='40px' src={this.props.user.picture} /></div></Link>);
      
    }
    return (<div className='navlink' style={{width: '7%', display: 'inline-block'}}></div>);

  }
  render() {
  	return (
      <div className='nav'>

        <div className='links'>
          <div className='navlink logo' style={{width: '5%', display: 'inline-block'}}><img style={{marginTop: '10px', marginLeft: '5px'}} src="images/logo.png" width="40px" /></div>
          <Link to="landing"><div className='navlink' style={{width: '5%', display: 'inline-block'}}><img style={{marginTop: '12px', marginLeft: '5px'}} src="images/home.png" width="35px" /></div></Link>
          <Link to="personalpage"><div className='navlink' style={{width: '7%', display: 'inline-block'}}><img style={{marginTop: '18px', marginLeft: '5px'}} src="images/watch.png" width="60px" /></div></Link>
          <Link to="sellitem"><div className='navlink' style={{width: '5%', display: 'inline-block'}}><img style={{marginTop: '12px', marginLeft: '5px'}} src="images/sell.png" width="40px" /></div></Link>
          <div className='navlink2' style={{width: '64%', display: 'inline-block'}}><SearchBar /></div>
          {this.renderProfilePic()}
          {this.renderAuth()}
          
        </div>
      </div>
      );
  }
};

var mapStateToProps = function(state, ownProps) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    logoutUser: checkAuthentication({ type: 'LOGOUT_USER' })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
