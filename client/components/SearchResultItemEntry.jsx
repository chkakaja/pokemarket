import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import prettyDate from 'dateformat';

class SearchResultItemEntry extends Component {

  static defaultProps = {
    item: {
      seller: {
        name: '',
        picture: ''
      }
    }
  }

  componentDidMount() {
    this.grabItemData();
  }

  grabItemData() {
    $.ajax({
      method: 'GET',
      url: '/getItemData',
      data: { id: this.props.id },
      dataType: 'json',
      success: function(data) {
        console.log('Successfully populated item', data);
      }.bind(this)
    });
  }

  goToItem() {

  }

  render () {
    return (
      <div className='search-item-page' onClick={this.goToItem}>
        <div className='search-item'>
          <div className='search-item-title'>{this.props.item.title}</div>
          <img src={this.props.item.picture} height='300px' className='search-item-picture' />
          <div className='search-item-description'>{this.props.item.description}</div>
        </div>
        <div className='serach-item-bid'>
          <div className='search-item-current-bid'>{this.props.item.currentBid}</div>
          <div className='search-item-end-time'>{prettyDate(this.props.item.end_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</div>
        </div>
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps) {
  var selectedItem = {};
  state.filteredItems.forEach(function(item) {
    if (item.id === ownProps.id) {
      selectedItem = item;
    }
  })
  console.log(selectedItem);
    return {
      item: selectedItem
    }
};

var mapDispatchToProps = function(dispatch){
  return {
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(SearchResultItemEntry);
