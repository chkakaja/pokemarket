import React, { Component, PropTypes } from 'react';

var image = {
  '0': 'images/neutral.png',
  '1': 'images/positive.png',
  '-1': 'images/negative.png',
  null: 'images/neutral.png'
};

export default class FeedbackEntry extends Component {
  render() {

    return (
      <div className='feedback-entry'>
        <div className='feedback-author'>
          <img src={image[String(this.props.rating)]} 
               style={{ width: '20px', marginRight: '6px' }} />
          <span className='feedback-author-name'>{this.props.author}</span>
        </div>
        <div className='feedback-item'>
          {this.props.item}
        </div>
        <div className='feedback-comment'>
          <b>Comment:  </b>{this.props.comment}
        </div>
      </div>
    );
  }
}