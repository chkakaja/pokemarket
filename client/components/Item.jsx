import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import prettyDate from 'dateformat';
import MessageBox from './MessageBox.jsx';

class Item extends Component {

  static defaultProps = {
    id: 3,
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
      success: function(data) {
        this.current_user = data;
      }.bind(this)
    });
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
    return (
      <div className='item'>
        <div className='item-info'>
          <div className='item-title'>{this.props.item.title}</div>
          <img src={this.props.item.picture} height='300px' className='item-picture' />
          <div className='item-description'>{this.props.item.description}</div>
        </div>
        <div className='purchase'>
          <form onSubmit={this.setBid.bind(this)}>
            <input className='set-bid' onChange={this.changeBid.bind(this)} type='number' placeholder='Set your bid here' />
          </form>
          <div className='current-bid'>{this.props.item.currentBid}</div>
          <div className='end-time'>{prettyDate(this.props.item.end_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</div>
          <button className='watch' type='submit' onClick={this.watchItem.bind(this)}>Watch Item</button>
        </div>
        <div className='item-seller'>
          <div className='seller-name'>{this.props.item.seller.name}</div>
          <img src={this.props.item.seller.picture} height='100px' className='seller-picture' />
        </div>
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    item: state.item
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
