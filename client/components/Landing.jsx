import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { checkAuthentication } from '../actions.js';
import WatchedItems from './WatchedItems.jsx';
import ListedItems from './ListedItems.jsx';
import PopularItems from './PopularItems.jsx';

class Landing extends Component {

  componentDidMount() {
    this.props.getUserId();
  }

  render () {
    if (this.props.user.id) {
      return (
        <div className='landing'>
          <WatchedItems />
          <ListedItems />
        </div>
      )
    } else {
      return (
        <div className='landing'>
          <PopularItems />
        </div>
      )
    }
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    user: state.user,
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    getUserId: checkAuthentication(dispatch)
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Landing);