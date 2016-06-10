import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import $ from 'jquery';
import prettyDate from 'dateformat';
import { checkAuthentication } from './../../actions';
import Item from './Item.jsx';

export default class ItemEntry extends Component {
  setCurrent() {
    this.props.setCurrentItem(this.props.item);
  }

  accept(e) {
    e.preventDefault();
    return $.ajax({
      method: 'POST',
      url: '/acceptPrice',
      data: {
        id: this.props.item.id,
        currentBidder: this.props.item.current_bidder,
        acceptedBid: this.props.item.currentBid
      },
      dataType: 'json',
      success: function(data) {
        this.props.item.newPrice = data.newPrice;
        this.props.setCurrentItem(this.props.item);
        //update state w new item Acceptprice
      }.bind(this)
    })
  }

  decline() {

  }

  render () {
    return (
      <div className='item-entry'>
        <Link to='item' onClick={this.setCurrent.bind(this)}>
          <img src={this.props.item.picture} height='300px' className='item-entry-picture' />
          <div className='all-info'>
            <div className='item-entry-info'>
              <div className='item-entry-title'>{this.props.item.title}</div>
              <div className='item-entry-description'>{this.props.item.description}</div>
            </div>
          </div>
        </Link>
            <div className='item-entry-purchase'>
              <div className='item-entry-current-bid'>
                <span className='bold'>Original Price: ${this.props.item.originalPrice}</span>
              </div>
            </div>
            <div className='item-entry-counters'>
              <div>
                <p className='bold'>Proposed Price: ${this.props.item.currentBid}</p>
                <button class="pure-button" onClick={this.accept.bind(this)}>Accept</button>
                <button class="pure-button" onClick={this.decline.bind(this)}>Decline</button>
              </div>
            </div>
          </div>
    );
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    getUser: checkAuthentication(dispatch),
    setCurrentItem: (item) => {
      dispatch({
        type: 'SET_CURRENT_ITEM',
        item
      })
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ItemEntry);
