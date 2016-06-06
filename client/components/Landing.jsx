import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { checkAuthentication } from '../actions.js';
import PopularItems from './PopularItems.jsx';
import LeaveFeedback from './LeaveFeedback.jsx';

class Landing extends Component {
  render () {
    if (this.props.user.id) {
      return (
        <div>
          <div className='landing'>
            <div className='watched-items pure-u-1-3'><WatchedItems /></div>
            <div className='listed-items pure-u-1-3'><ListedItems /></div>
            <div className='popular-items pure-u-1-3'><PopularItems /></div>
          </div>
          <div className='leave-feedback pure-u-1-3'><LeaveFeedback /></div>       
        </div>
      )
    } else {
    return (
      <div className='landing'>
        <div className='popular-items'><PopularItems /></div>
      </div>
    )
    }
  }
}

module.exports = Landing;
