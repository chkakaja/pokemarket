import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { join, sendMessage } from './../socket.js';

class Username extends Component {
  _startVideoChat(haggleUrl) {
    var respondLink = haggleUrl +'init=0';

    sendMessage(this.props.userId, this.props.sellerId, respondLink);
  }

  render() {
    let haggleUrl = '/haggle?' + 'id=' + Math.floor((Math.random() * 10000000)).toString() + '&';

    return (
      <div className="username">
        <Link to="profile">
          <div onClick={this.props.setProfileUser.bind(this, this.props.sellerId)} className="username-name">{this.props.name}</div>
        </Link>
        <h1>
          <i onClick={this.props.addMessageBox.bind(this, this.props.userId, this.props.sellerId, this.props.name)} className="fa fa-comment" aria-hidden="true"></i>
          <a href={haggleUrl + 'init=1'} target="_blank">
            <i onClick={this._startVideoChat.bind(this, haggleUrl)} className="fa fa-video-camera" aria-hidden="true"></i>
          </a>
        </h1>
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
      console.log('dispatching current', current)
      dispatch({
        type: 'SET_PROFILE_USER',
        current
      });
    }
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Username);
