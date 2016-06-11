import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import SearchBar from './SearchBar.jsx';

export default class Navbar extends React.Component {
  
  render() {
  	return (
      <div className='nav'>
        <div className='links'>

          <div className='navlink empty' style={{width: '5%', display: 'inline-block'}}><img style={{marginTop: '10px', marginLeft: '5px'}} src="images/logo.png" width="40px" /></div>
          <Link to="landing"><div className='navlink' style={{width: '5%', display: 'inline-block'}}><img style={{marginTop: '12px', marginLeft: '5px'}} src="images/home.png" width="35px" /></div></Link>
          <Link to="personalpage"><div className='navlink' style={{width: '7%', display: 'inline-block'}}><img style={{marginTop: '18px', marginLeft: '5px'}} src="images/watch.png" width="60px" /></div></Link>
          <Link to="sellitem"><div className='navlink' style={{width: '5%', display: 'inline-block'}}><img style={{marginTop: '12px', marginLeft: '5px'}} src="images/sell.png" width="40px" /></div></Link>
          <div className='navlink2' style={{width: '64%', display: 'inline-block'}}><SearchBar /></div>
          <Link to="profile"><div className='navlink' style={{width: '7%', display: 'inline-block'}}><img style={{marginTop: '12px', marginLeft: '5px', borderRadius:'50%', border: '2px solid white' }} width="40px" height='40px' src={this.props.user.picture} /></div></Link>

          <span>
            <div className='navlink empty dropdown' style={{width: '7%', display: 'inline-block'}}>
              <img style={{marginTop: '12px', marginLeft: '5px'}} src="images/setting.png" width="40px" />
              <ul>
                <Link to='profile'><div>Edit Profile</div></Link>
                <a href='signout'><div>Sign Out</div></a>
              </ul>
            </div>
          </span>
          
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

export default connect(mapStateToProps)(Navbar);
