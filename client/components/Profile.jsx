import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getProfile } from '../actions.js';
import Feedback from './Feedback.jsx';
import ProfileEntry from './ProfileEntry.jsx';

class Profile extends Component {

  componentWillMount() {
    this.props.getProfile(this.props.id);
  }
  render() {
    if (this.props.profile) {
      return (
        <div className="profile-page">
          <ProfileEntry id={this.props.profile.id}
                        name={this.props.profile.name}
                        email={this.props.profile.email}
                        bio={this.props.profile.bio}
                        picture={this.props.profile.picture} />
          <Feedback receiver={this.props.profile.id} />
        </div>
      );
    }
    return null;
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    profile: state.profile.profile,
    id: state.profile.current || state.user.id
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    getProfile: getProfile(dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);