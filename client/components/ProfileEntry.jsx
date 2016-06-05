import React, { Component, PropTypes } from 'react';

import Username from './Username.jsx';

export default class ProfileEntry extends Component {

  render() {
    return (
      <div className='profile'>
        <div className='profile-name'>
          <Username id={this.props.id} name={this.props.name} />
        </div>
        <div className='profile-email'>
          {'Email: ' + this.props.email}
        </div>
        <div className='profile-bio'>
          {this.props.bio}
        </div>
        <div className='profile-picture'>
          <img src={this.props.picture} style={{ maxWidth: '300px' }}/>
        </div>
      </div>
    );
  }
}