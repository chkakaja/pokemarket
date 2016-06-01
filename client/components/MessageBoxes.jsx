import React, { Component, PropTypes } from 'react';
import MessageBox from './MessageBox.jsx'
import { connect } from 'react-redux';
import { checkAuthentication } from '../actions.js';

// console.log('checkAuthentication', checkAuthentication);

class MessageBoxes extends Component {
  static defaultProps = {
    activeMessages: []
  }

  componentDidMount() {
    this.props.getUserId();
  }

  render() {
    if (this.props.user) {
      return (
        <div>
          {this.props.activeMessages.map(receiver => <MessageBox userId={this.props.user.id} name={this.props.user.name} receiver={receiver} />)}
        </div>
      );
    }
    return null;
  }
  
}

var mapStateToProps = function(state, ownProps) {
  return {
    activeMessages: state.messages.active,
    user: state.user
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    getUserId: checkAuthentication(dispatch)
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(MessageBoxes);
