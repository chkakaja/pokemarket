import React, { Component, PropTypes } from 'react';

export default class Feedback extends Component {
  static defaultProps = {
    feedback: [],
    positive: 0,
    neutral: 0,
    negative: 0
  }

  render() {
    return (
      <div className='feedback'>
        <div className='feedback-profile'>
        </div>
        <div className='feedback-entries'>
          {this.props.feedback.map(feedback => {
            
          })}
        </div>
      </div>

    );
  }


}