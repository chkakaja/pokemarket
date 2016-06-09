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
  setCurrent() {
    this.props.setCurrentItem(this.props.item);
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
            <div className='item-entry-purchase'>
              <div className='item-entry-current-bid'><b>Current Price:</b> ${this.props.item.originalPrice}</div>
            </div>
            <div className='item-entry-counters'>
              <div>
                Counter offers:
                <ul>
                  <li> $8
                  <button class="pure-button">Accept</button>
                  <button class="pure-button">Decline</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Link>
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
