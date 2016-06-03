import React, { Component, PropTypes } from 'react';

export default class FeedbackEntry extends Component {
  render() {
    return (
      <div className='feedback-entry'>
        <div className='feedback-author'>
          {this.props.author}
        </div>
        <div className='feedback-rating'>
          {this.props.rating}
        </div>
        <div className='feedback-item'>
          {this.props.item}
        </div>
        <div className='feedback-comment'>
          {this.props.comment}
        </div>
      </div>
    );
  }
}