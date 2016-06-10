import React, { Component, PropTypes } from 'react';
import { fetchLeaveFeedback } from './../../actions';
import { connect } from 'react-redux';
import LeaveFeedbackEntry from './LeaveFeedbackEntry.jsx';

export default class LeaveFeedback extends Component {

  static defaultProps = {
    toLeaveFeedbackArray: []
  };

  componentWillMount() {
    this.props.fetchLeaveFeedback();
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

var mapStateToProps = function(state) {
  return {
    toLeaveFeedbackArray: state.toLeaveFeedback
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    fetchLeaveFeedback: fetchLeaveFeedback(dispatch(fetchLeaveFeedback()))
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(LeaveFeedback);
