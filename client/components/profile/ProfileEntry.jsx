import React, { Component, PropTypes } from 'react';

import Username from './../Username.jsx';

export default class ProfileEntry extends Component {

  render() {
    return (
      <div className='profile pure-u-2-5'>
        <Username id={this.props.id} name={this.props.name} />
        <div className='profile-picture'>
          <img src={this.props.picture} style={{ width: '90%' }}/>
        </div>
        <div className='profile-created-at'>
          {'Member since ' + this.props.createdAt.slice(0,4)}
        </div> 
        <div className='profile-bio'>
          {this.props.bio}
        </div>
      </div>
    );
  }
}