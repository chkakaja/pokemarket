import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import $ from 'jquery';
import prettyDate from 'dateformat';
import { checkAuthentication } from './../actions';
import Item from './Item.jsx';
import CountdownTimer from './CountdownTimer.jsx';

export default class ItemEntry extends Component {

  componentDidMount() {
    this.props.getUser();
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

  setCurrent() {
    this.props.setCurrentItem(this.props.item);
  }

  render () {
    if (this.props.user.id) {
      return (
        <div className='item-entry'>
          <Link to='item' onClick={this.setCurrent.bind(this)}>
            <img src={this.props.item.picture} height='300px' className='item-entry-picture' />
            <div className='all-info'>
              <div className='item-entry-info'>
                <div className='item-entry-title'>{this.props.item.title}</div>
                <div className='item-entry-description'>{this.props.item.description}</div>
              </div>
              <div className='item-entry-purchase'>
                <div className='item-entry-current-bid'><b>Current Bid:</b> ${this.props.item.currentBid}</div>
                <div className='item-entry-end-time'><b>Ending:</b> {prettyDate(this.props.item.end_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</div>
                <div className='countdown'><CountdownTimer endDate={this.props.item.end_at} /></div>
                <button className='watch pure-button' type='submit' onClick={this.watchItem.bind(this)}>Watch Item</button>
              </div>
            </div>
          </Link>
        </div>
      );
    } else {
      return (
        <div className='item-entry'>
          <Link to='item' onClick={this.setCurrent.bind(this)}>
            <img src={this.props.item.picture} height='300px' className='item-entry-picture' />
            <div className='all-info'>
              <div className='item-entry-info'>
                <div className='item-entry-title'>{this.props.item.title}</div>
                <div className='item-entry-description'>{this.props.item.description}</div>
              </div>
              <div className='item-entry-purchase'>
                <div className='item-entry-current-bid'><b>Current Bid:</b> ${this.props.item.currentBid}</div>
                <div className='item-entry-end-time'><b>Ending:</b> {prettyDate(this.props.item.end_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</div>
                <div className='countdown'><CountdownTimer endDate={this.props.item.end_at} /></div>
              </div>
            </div>
          </Link>
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
