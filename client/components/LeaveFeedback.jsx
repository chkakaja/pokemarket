import React, { Component, PropTypes } from 'react';
import { getLeaveFeedback } from '../actions.js';
import { connect } from 'react-redux';
import LeaveFeedbackEntry from './LeaveFeedbackEntry.jsx';

export default class LeaveFeedback extends Component {

  static defaultProps = {
    toLeaveFeedbackArray: []
  };

  componentDidMount() {
    this.props.getLeaveFeedback();
  }
  render() {
    return (
      <div>
        {this.props.toLeaveFeedbackArray.map(item => (
          <LeaveFeedbackEntry buyer={item.current_bidder} 
                              key={item.id} 
                              item={item.id} 
                              title={item.title} 
                              seller={item.seller_id} />
        ))}
      </div>
    );  
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    toLeaveFeedbackArray: state.toLeaveFeedback
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    getLeaveFeedback: getLeaveFeedback(dispatch)
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(LeaveFeedback);
