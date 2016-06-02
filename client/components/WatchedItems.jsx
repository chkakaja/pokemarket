import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import { checkAuthentication } from '../actions.js';
import ItemEntry from './ItemEntry.jsx';

class WatchedItems extends Component {
  // static defaultProps = {
  //   watchedItems = [];
  // }

  componentWillMount() {
    this.watchedItems = [];
  }

  componentDidMount() {
    // this.props.getUserId();
    this.getWatchedItems();
  }

  getWatchedItems() {
    $.ajax({
      method: 'GET',
      url: '/getWatchedItems',
      // CHANGE THIS
      data: { user_id: 1 },
      dataType: 'json',
      success: function(data) {
        this.watchedItems = data;
        console.log(this.watchedItems);
      }
    })
  }

  render() {
    if (1) {
      return (
        <div>
          {this.watchedItems.map(item => <ItemEntry id={item.id} key={item.id} />)}
        </div>
      );
    } else {
      return (
        <div>Sign in to watch items!</div>
      );
    }
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    // userId: state.userId
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    // getUserId: checkAuthentication(dispatch)
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(WatchedItems);
