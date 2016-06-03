import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import prettyDate from 'dateformat';
import { checkAuthentication } from '../actions.js';

export default class ItemEntry extends Component {

  componentDidMount() {
    this.grabItemData();
    this.props.getUser();
  }

  grabItemData() {
    $.ajax({
      method: 'GET',
      url: '/getItemData',
      data: { id: this.props.item.id },
      dataType: 'json',
      success: function(data) {
        console.log('Successfully populated item', data);
      }.bind(this)
    });
  }

  watchItem(e) {
    $.ajax({
      method: 'GET',
      url: '/watchitem',
      data: {
        item_id: this.props.item.id,
        user_id: this.props.user.id
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
    console.log(this.props.item)
    if (this.props.user.id) {
      return (
        <div className='item-entry' onClick={this.goToItem}>
          <img src={this.props.item.picture} height='300px' className='item-entry-picture' />
          <div className='all-info'>
            <div className='item-entry-info'>
              <div className='item-entry-title'>{this.props.item.title}</div>
              <div className='item-entry-description'>{this.props.item.description}</div>
            </div>
            <div className='item-entry-purchase'>
              <div className='item-entry-current-bid'><b>Current Bid:</b> ${this.props.item.currentBid}</div>
              <div className='item-entry-end-time'>{prettyDate(this.props.item.end_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</div>
              <button className='watch' type='submit' onClick={this.watchItem.bind(this)}>Watch Item</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='item-entry' onClick={this.goToItem}>
          <img src={this.props.item.picture} height='300px' className='item-entry-picture' />
          <div className='all-info'>
            <div className='item-entry-info'>
              <div className='item-entry-title'>{this.props.item.title}</div>
              <div className='item-entry-description'>{this.props.item.description}</div>
            </div>
            <div className='item-entry-purchase'>
              <div className='item-entry-current-bid'><b>Current Bid:</b> ${this.props.item.currentBid}</div>
              <div className='item-entry-end-time'>{prettyDate(this.props.item.end_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    getUser: checkAuthentication(dispatch)
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ItemEntry);
