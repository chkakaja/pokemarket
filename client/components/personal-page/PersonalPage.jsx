import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import WatchedItems from './WatchedItems.jsx';
import ListedItems from './ListedItems.jsx';
import LeaveFeedback from './LeaveFeedback.jsx';

class PersonalPage extends Component {
  render () {
    return (
      <div className='personalpage'>
        <div className='watched-items pure-u-1-3'><WatchedItems /></div>
        <div className='listed-items pure-u-1-3'><ListedItems /></div>
        <div className='leave-feedback pure-u-1-3'><LeaveFeedback /></div>
      </div>
    )
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    user: state.user
  };
};

module.exports = connect(mapStateToProps)(PersonalPage);