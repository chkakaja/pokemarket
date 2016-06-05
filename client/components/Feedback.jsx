import React, { Component, PropTypes } from 'react';
import { getFeedback } from '../actions.js';
import { connect } from 'react-redux';
import FeedbackEntry from './FeedbackEntry.jsx';

export default class Feedback extends Component {

  static defaultProps = {
    receiver: 1,
    positive: 0,
    negative: 0,
    neutral: 0,
    feedbackArray: [{author: 'kim', rating: 1, item: 1, comment: 'bad'}]
  };

  componentWillMount() {
    this.props.getFeedback(this.props.receiver);
  }

  render() {
    return (
      <div className='feedback'>
        <div className='feedback-profile'>
          <div>{`Positive: ${this.props.positive}`}</div>
          <div>{`Neutral: ${this.props.neutral}`}</div>
          <div>{`Negative: ${this.props.negative}`}</div>

        </div>
        <div className='feedback-entries'>
          {this.props.feedbackArray.map(feedback => {
            return <FeedbackEntry author={feedback.name} 
                                  rating={feedback.rating} 
                                  item={feedback.item}
                                  comment={feedback.comment}
                                  key={feedback.id} />
          })}
        </div>
      </div>

    );
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    feedbackArray: state.feedback.feedbackArray,
    negative: state.feedback.negative,
    positive: state.feedback.positive,
    neutral: state.feedback.neutral
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    getFeedback: getFeedback(dispatch)
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Feedback);