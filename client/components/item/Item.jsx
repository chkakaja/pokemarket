import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import $ from 'jquery';

import prettyDate from 'dateformat';
import Username from './../Username.jsx';
import CountDownTimer from './../CountDownTimer.jsx';
import StripeCheckout from './React-Stripe-Checkout.jsx'

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
  
  addVisit() {
    $.ajax({
      method: 'POST',
      url: '/addvisit',
      data: { id: this.props.item.id },
      dataType: 'json',
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
    console.log('bidded', this.form)
    return $.ajax({
      method: 'POST',
      url: '/updateBid',
      data: {
        id: this.props.item.id,
        currentBidder: this.props.user.id,
        newBid: this.form
      },
      dataType: 'json',
      success: function(data) {
        this.props.item.currentBid = data.currentBid;
        this.props.item.current_bidder = this.seller_id;
        console.log('Current bid:', data.currentBid);
        this.props.setCurrentItem(this.props.item);
        document.getElementsByClassName('set-bid-input')[0].value = '';
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
    if (this.props.user.id) {
      return (
        <div className='item'>
          <div className='item-title'>{this.props.item.title}</div>
          <div className='item-info pure-u-10-24'>
            <img src={this.props.item.picture} className='item-picture' />
            <div className='item-description'>{this.props.item.description}</div>
            <button className='watch pure-button' type='submit' onClick={this.watchItem.bind(this)}>Watch Item</button>
          </div>
          <div className='pure-u-1-24'></div>
          <div className='purchase pure-u-6-24'>
            <div className='current-bid'>
              <span className='bold'>Current Price: </span>
              ${this.props.item.currentBid}
            </div>
            <form onSubmit={this.setBid.bind(this)}>
              <div className='set-bid pure-form'>
                <input className='set-bid-input pure-input-1-2' onChange={this.changeBid.bind(this)} type='number' placeholder='Your price' />
                <input type='submit' className='set-bid-button pure-button' />
              </div>
            </form>
            <div className='end-time'>{prettyDate(this.props.item.end_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</div>
            <CountDownTimer endDate={this.props.item.end_at} />
            <StripeCheckout price={this.props.item.currentBid} />
          </div>
          <div className='pure-u-1-24'></div>
          <div className='item-seller pure-u-4-24'>
            <div className='seller-info'>Seller:</div>
            <Username id={this.props.item.seller.id} name={this.props.item.seller.name} />
            <div className='hover-image'>
              <img src={this.props.item.seller.picture} className='seller-picture' />
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
              <span className='bold'>Current Price: </span>
              ${this.props.item.currentBid}
            </div>
          </div>
          <div className='pure-u-1-24'></div>
          <div className='item-seller pure-u-4-24'>
            <div className='seller-info'>Seller:</div>
            <div className='seller-name'>{this.props.item.seller.name}</div>
            <div className='hover-image'>
              <img src={this.props.item.seller.picture} className='seller-picture' />
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
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Item);
