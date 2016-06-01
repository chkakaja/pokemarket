import React, { Component, PropTypes } from 'react';
import MessageBox from './MessageBox.jsx'
import { connect } from 'react-redux';
import { checkAuthentication } from '../actions.js';

console.log('checkAuthentication', checkAuthentication);

class MessageBoxes extends Component {
  static defaultProps = {
    activeMessages: []
  }

  componentDidMount() {
    this.props.getUserId();
  }

  render() {
    console.log(this.props.userId);
    if (this.props.userId) {
      return (
        <div>
          {this.props.activeMessages.map(receiver => <MessageBox userId={this.props.userId} receiver={receiver} />)}
        </div>
      );
    }
    return null;
  }
  
}

var mapStateToProps = function(state, ownProps) {
  console.log(state);
  return {
    activeMessages: state.messages.active,
    userId: state.userId
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    getUserId: checkAuthentication(dispatch)
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(MessageBoxes);