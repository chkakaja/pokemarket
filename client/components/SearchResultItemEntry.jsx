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
    this.getCurrentUser();
  }

  getCurrentUser() {
    $.ajax({
      method: 'GET',
      url: '/getuserid',
      success: function(data) {
        this.current_user = data;
      }.bind(this)
    });
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

  watchItem(e) {
    e.preventDefault();
    return $.ajax({
      method: 'GET',
      url: '/watchitem',
      data: {
        item_id: this.props.id,
        user_id: this.current_user
      },
      dataType: 'json',
      success: function(data) {
        console.log('Watching item', data);
      }
    })
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
        <div className='search-item-purchase'>
          <div className='search-item-current-bid'>{this.props.item.currentBid}</div>
          <div className='search-item-end-time'>{prettyDate(this.props.item.end_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</div>
          <button className='watch' type='submit' onClick={this.watchItem.bind(this)}>Watch Item</button>
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
    return {
      item: selectedItem
    }
};

var mapDispatchToProps = function(dispatch){
  return {
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(SearchResultItemEntry);
