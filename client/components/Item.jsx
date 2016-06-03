import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import prettyDate from 'dateformat';
import MessageBox from './MessageBox.jsx';

class Item extends Component {

  static defaultProps = {
    id: 1,
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
    this.addVisit();
  }

  grabItemData() {
    $.ajax({
      method: 'GET',
      url: '/getItemData',
      data: { id: this.props.id },
      dataType: 'json',
      success: function(data) {
        this.props.sendItemData(data);
      }.bind(this)
    });
  }

  getCurrentUser() {
    $.ajax({
      method: 'GET',
      url: '/getuserid',
      data: { id: this.props.id },
      dataType: 'json',
      success: function(data) {
        this.current_user = data;
      }.bind(this)
    });
  }

  addVisit() {
    $.ajax({
      method: 'POST',
      url: '/addvisit',
      success: function(data) {
        //console.log('Visit added. Now at', data.visits, 'visits');
      }
    })
  }

  changeBid(e) {
    this.form = e.target.value;
  }

  setBid(e) {
    e.preventDefault();
    return $.ajax({
      method: 'POST',
      url: '/updateBid',
      data: {
        id: this.props.id,
        newBid: this.form
      },
      dataType: 'json',
      success: function(data) {
        this.props.item.currentBid = data.currentBid;
        this.props.item.current_bidder = this.seller_id;
        console.log('Current bid:', data.currentBid);
        this.props.sendItemData(this.props.item);
        document.getElementsByClassName('set-bid')[0].value = '';
      }.bind(this)
    })
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

  createMessageBox() {
    // ################## RENDER MESSAGE BOX HERE
    
  }

  render () {
    if (this.props.userId) {
      return (
        <div className='item'>
          <div className='item-title'>{this.props.item.title}</div>
          <div className='item-info pure-u-10-24'>
            <img src={this.props.item.picture} className='item-picture' />
            <div className='item-description'>{this.props.item.description}</div>
          </div>
          <div className='pure-u-1-24'></div>
          <div className='purchase pure-u-6-24'>
            <div className='current-bid'>
              <span className='bold'>Current Highest Bid: </span>
              ${this.props.item.currentBid}
            </div>
            <form onSubmit={this.setBid.bind(this)}>
              <div className='set-bid pure-form'>
                <span className='bold'>Set Your Bid: </span>
                <input className='pure-input-1-2' onChange={this.changeBid.bind(this)} type='number' placeholder='Set your bid' />
              </div>
            </form>
            <div className='end-time'>{prettyDate(this.props.item.end_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</div>
            <button className='watch pure-button' type='submit' onClick={this.watchItem.bind(this)}>Watch Item</button>
          </div>
          <div className='pure-u-1-24'></div>
          <div className='item-seller pure-u-4-24'>
            <div className='seller-info'>Seller:</div>
            <div className='seller-name'>{this.props.item.seller.name}</div>
            <div className='hover-image'>
              <img src={this.props.item.seller.picture} className='seller-picture' />
              <p className='text'>Message seller</p>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='item'>
          <div className='item-title'>{this.props.item.title}</div>
          <div className='item-info pure-u-10-24'>
            <img src={this.props.item.picture} className='item-picture' />
            <div className='item-description'>{this.props.item.description}</div>
          </div>
          <div className='pure-u-1-24'></div>
          <div className='purchase pure-u-6-24'>
            <div className='current-bid'>
              <span className='bold'>Current Highest Bid: </span>
              ${this.props.item.currentBid}
            </div>
            <form onSubmit={this.setBid.bind(this)}>
            </form>
            <div className='end-time'>{prettyDate(this.props.item.end_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</div>
          </div>
          <div className='pure-u-1-24'></div>
          <div className='item-seller pure-u-4-24'>
            <div className='seller-info'>Seller:</div>
            <div className='seller-name'>{this.props.item.seller.name}</div>
            <div className='hover-image'>
              <img src={this.props.item.seller.picture} className='seller-picture' />
              <p className='text'>Message seller</p>
            </div>
          </div>
        </div>
      )
    }
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    item: state.item,
    userId: state.userId
  }
};

var mapDispatchToProps = function(dispatch){
  return {
    sendItemData: (item) => {
      dispatch({
        type: 'UPDATE_ITEM_DATA',
        item
      })
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Item);
