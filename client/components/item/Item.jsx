import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import $ from 'jquery';

import Username from './../Username.jsx';
import StripeCheckout from './../React-Stripe-Checkout.jsx'
import { join, sendMessage } from './../../socket.js';

  
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

  constructor(props) {
    super(props);
    this.state = {
      bidProposed: false
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
          console.log(this.props, 'I AM THE PROPS');
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
        console.log('Current bid:', data.currentBid);
        this.props.setCurrentItem(this.props.item);
        document.getElementsByClassName('set-bid-input')[0].value = '';
        this.setState({bidProposed: true})
        this.watchItem(e);
        this.sendMessages('New Bid on ');
      }.bind(this)
    })
  }

  sendMessages(text) {
    var newText = text + this.props.item.title.toString()
    sendMessage(this.props.user.id, this.props.item.seller.id, newText)
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
            <span className='bold'>Original Price: ${this.props.item.originalPrice}</span>
            <p className='bold'>Proposed Price: ${this.props.item.currentBid} </p>
          </div>
          <form onSubmit={this.setBid.bind(this)}>
            <div className='set-bid pure-form'>
              <input className='set-bid-input pure-input-1-2' onChange={this.changeBid.bind(this)} type='number' placeholder='Your price' />
              <input type='submit' className='set-bid-button pure-button' />
            </div>
          </form>
          {this.state.bidProposed ? <div>Sent bid to seller.</div> : null }
          <StripeCheckout item={this.props.item} />
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
