import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import WatchedItems from './WatchedItems.jsx';

class Landing extends Component {
  render () {
    return (
      <div className='landing'>
        <WatchedItems />
      </div>
    );
  }
}

module.exports = Landing;
