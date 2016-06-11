import React, { PropTypes } from 'react';
import MessageBox from './MessageBox.jsx'
import { connect } from 'react-redux';

class MessageBoxes extends React.Component {
  static defaultProps = {
    activeMessages: []
  }

  render() {
    if (this.props.activeMessages.length) {
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
    } else {
      return null;
    }
  }
}

var mapStateToProps = function(state) {
  return {
    user: state.user,
    activeMessages: state.messages.active,
  };
};

module.exports = connect(mapStateToProps)(MessageBoxes);
