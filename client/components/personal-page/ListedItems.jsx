import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import $ from 'jquery';

import ItemEntry from './../ItemEntry.jsx';

class ListedItems extends Component {
  static defaultProps = {
    listedItems: []
  }

  componentDidMount() {
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
    return (
      <div>
        <div className='listings'>Your current listings</div>
        {this.props.listedItems.map(item => <ItemEntry item={item} key={item.id} />)}
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    listedItems: state.listedItems
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    updateListedItems: (data) => {
      dispatch({
        type: 'UPDATE_LISTED_ITEMS',
        data
      });
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ListedItems);
