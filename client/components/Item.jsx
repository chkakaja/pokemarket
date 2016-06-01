import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MessageBox from './MessageBox.jsx';
import prettyDate from 'dateformat';

class Item extends Component {
  constructor(props) {
    super(props)

    this.id = 1;
    this.item = { seller: {
      name: '',
      picture: ''
    }};
  }

  componentDidMount() {
    this.grabItemData();
  }

  grabItemData() {
    $.ajax({
      method: 'GET',
      url: '/getItemData',
      // change this to this.props.id later
      data: { id: this.id },
      dataType: 'json',
      success: function(data) {
        this.item = data;
      }.bind(this)
    });
  }

  setBid(e) {
    e.preventDefault();
    // SET THE BID HERE
  }

  createMessageBox() {
    // RENDER MESSAGE BOX
  }

  render () {
    return (
      <div className='item-page'>
        <div className='item'>
          <div className='item-title'>{this.item.title}</div>
          <img src={this.item.picture} height='300px' className='item-picture' />
          <div className='item-description'>{this.item.description}</div>
        </div>
        <div className='bid'>
          <form className='set-bid' onSubmit='this.setBid'>
            <input className='set-bid' placeholder='Set your bid here' />
          </form>
          <div className='current-bid'>{this.item.currentBid}</div>
          <div className='end-time'>{prettyDate(this.item.end_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</div>
        </div>
        <div className='item-seller'>
          <div className='seller-name'>{this.item.seller.name}</div>
          <img src={this.item.seller.picture} height='100px' className='seller-picture' />
        </div>
      </div>
    );
  }
}

module.exports = Item;
