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
    // this.props.getUser();
    console.log(this.props.activeMessages);
  }

  render() {
    if (this.props.user.id) {
      return (
        <div className="message-boxes">
          {this.props.activeMessages.map((receiver, index) => 
            <MessageBox userId={this.props.user.id} 
                        name={this.props.user.name} 
                        receiver={receiver.id} 
                        receiverName={receiver.name}
                        hide={receiver.hide ? true : false} 
                        key={index}
            />)}
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
    getUser: checkAuthentication(dispatch)
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(MessageBoxes);
