import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Username extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  };

  render() {
    return (<div onClick={this.props.addMessageBox.bind(this, this.props.userId, this.props.id, this.props.name)}className="seller-name">{this.props.name}</div>);
  }
}

var mapStateToProps = function(state) {
  return {
    userId: state.user.id
  }
};

var mapDispatchToProps = function(dispatch) {
  return {
    addMessageBox: (userId, id, name) => {
      console.log(userId);
      if (userId !== id) {
        dispatch({
          type: 'NEW_MESSAGE_BOX',
          chatter: { id, name }
        });
      }
    }
  };
};

module.exports = connect(null, mapDispatchToProps)(Username);
