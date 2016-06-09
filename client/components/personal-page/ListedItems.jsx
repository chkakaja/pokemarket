import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import { checkAuthentication } from './../../actions';
import ItemEntry from './../ItemEntry.jsx';

class ListedItems extends Component {
  static defaultProps = {
    listedItems: []
  }

  componentDidMount() {
    this.props.getUserId();
    this.getListedItems();
  }

  getListedItems() {
    $.ajax({
      method: 'GET',
      url: '/getListedItems',
      data: { user_id: this.props.user.id },
      dataType: 'json',
      success: function(data) {
        this.props.updateListedItems(data);
      }.bind(this)
    })
  }

  render() {
    if (this.props.user.id) {
      return (
        <div>
          <div className='listings'>Your current listings</div>
          {this.props.listedItems.map(item => <ItemEntry item={item} key={item.id} />)}
        </div>
      );
    } else {
      return (
        <div>Sign in to see your listed items!</div>
      );
    }
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    user: state.user,
    listedItems: state.listedItems
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    getUserId: checkAuthentication(dispatch),
    updateListedItems: (data) => {
      dispatch({
        type: 'UPDATE_LISTED_ITEMS',
        data
      });
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ListedItems);
