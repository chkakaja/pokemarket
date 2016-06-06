import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import { checkAuthentication } from '../actions.js';
import ItemEntry from './ItemEntry.jsx';

class WatchedItems extends Component {
  static defaultProps = {
    watchedItems: []
  }

  componentDidMount() {
    this.props.getUserId();
    this.getWatchedItems();
  }

  getWatchedItems() {
    $.ajax({
      method: 'GET',
      url: '/getWatchedItems',
      data: { user_id: this.props.user.id },
      dataType: 'json',
      success: function(data) {
        this.props.updateWatchedItems(data);
      }.bind(this)
    })
  }

  render() {
    if (this.props.user.id) {
      return (
        <div>
          <div className='watching'>Your current watch list</div>
          {this.props.watchedItems.map(item => <ItemEntry item={item} key={item.id} />)}
        </div>
      );
    } else {
      return <div>Sign in to watch items!</div>
    }
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    user: state.user,
    watchedItems: state.watchedItems
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    getUserId: checkAuthentication(dispatch),
    updateWatchedItems: (data) => {
      dispatch({
        type: 'UPDATE_WATCHED_ITEMS',
        data
      });
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(WatchedItems);
