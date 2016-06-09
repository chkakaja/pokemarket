import React, { Component, PropTypes } from 'react';
import { getLeaveFeedback } from './../actions';
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
    if (this.props.toLeaveFeedbackArray.length) {
      return (
        <div>
          <div className='feedback'>Leave Feedback</div>
            {this.props.toLeaveFeedbackArray.map(item => (
              <LeaveFeedbackEntry buyer={item.current_bidder} 
                                  key={item.id} 
                                  item={item.id} 
                                  title={item.title} 
                                  seller={item.seller_id}
                                  picture={item.picture} />
            ))}
        </div>
      );  
    }
    return null;
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
