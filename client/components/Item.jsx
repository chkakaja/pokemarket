import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import prettyDate from 'dateformat';
import SearchResults from './SearchResults.jsx';
import Username from './Username.jsx';
import { checkAuthentication } from '../actions.js';
import CountdownTimer from './CountdownTimer.jsx';

class Item extends Component {

  static defaultProps = {
    item: {
      id: 0,
      seller: {
        name: '',
        picture: ''
      }
    }
  }

  componentDidMount() {
    this.grabItemSeller();
    this.addVisit();
  }

  grabItemSeller() {
    if (this.props.item.id !== 0) {
      $.ajax({
        method: 'GET',
        url: '/getItemSeller',
        data: { id: this.props.item.id },
        dataType: 'json',
        success: function(data) {
          this.props.setCurrentItem(data);
          console.log(this.props);
        }.bind(this)
      });
    }
  }

  // getCurrentUser() {
  //   $.ajax({
  //     method: 'GET',
  //     url: '/getuserid',
  //     data: { id: this.props.item.id },
  //     dataType: 'json',
  //     success: function(data) {
  //       this.current_user = data;
  //     }.bind(this)
  //   });
  // }

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
        id: this.props.item.id,
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

  render () {
    console.log('item page', this.props.item.seller.id);
    if (this.props.user) {
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
            <CountdownTimer endDate={this.props.item.end_at} />
            <button className='watch pure-button' type='submit' onClick={this.watchItem.bind(this)}>Watch Item</button>
          </div>
          <div className='pure-u-1-24'></div>
          <div className='item-seller pure-u-4-24'>
            <div className='seller-info'>Seller:</div>
            <Username id={this.props.item.seller.id} name={this.props.item.seller.name} />
            <div className='hover-image'>
              <img src={this.props.item.seller.picture} className='seller-picture' />
              <p className='text'>Message seller</p>
            </div>
          </div>
        </div>
      );
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
    item: state.currentItem,
    user: state.user
  }
};

var mapDispatchToProps = function(dispatch){
  return {
    setCurrentItem: (item) => {
      dispatch({
        type: 'SET_CURRENT_ITEM',
        item
      })
    },
    getUser: checkAuthentication(dispatch)
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Item);
