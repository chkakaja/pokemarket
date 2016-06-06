import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Username extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  };


  render() {
    return (
      <div className="username">
        <Link to="profile">
          <div onClick={this.props.setProfileUser.bind(this, this.props.id)} className="username-name">{this.props.name}</div>
        </Link>
        <img onClick={this.props.addMessageBox.bind(this, this.props.userId, this.props.id, this.props.name)} 
             src="images/message.png" className='message-button'/>
      </div>
    );
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
      if (userId != id) {
        dispatch({
          type: 'NEW_MESSAGE_BOX',
          chatter: { id, name }
        });
      }
    },
    setProfileUser: current => {
      dispatch({
        type: 'SET_USER',
        current
      });
    }
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Username);
