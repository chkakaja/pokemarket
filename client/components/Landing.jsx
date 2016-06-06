import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { checkAuthentication } from '../actions.js';
import PopularItems from './PopularItems.jsx';
import LeaveFeedback from './LeaveFeedback.jsx';

class Landing extends Component {
  render () {
    return (
      <div className='landing'>
        <div className='popular-items'><PopularItems /></div>
      </div>
    )
  }
}

module.exports = Landing;
