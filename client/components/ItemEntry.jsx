import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import $ from 'jquery';
import prettyDate from 'dateformat';
import { checkAuthentication } from './../actions';
import CountdownTimer from './CountDownTimer.jsx';

export default class ItemEntry extends React.Component {

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
              <div className='item-entry-current-bid'><b>Current Price:</b> ${this.props.item.currentBid}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

var mapDispatchToProps = function(dispatch) {
  return {
    setCurrentItem: (item) => {
      dispatch({
        type: 'SET_CURRENT_ITEM',
        item
      })
    }
  }
};

module.exports = connect(() => ({}), mapDispatchToProps)(ItemEntry);
