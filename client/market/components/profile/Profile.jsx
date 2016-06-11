import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchProfile } from './../../actions';
import Feedback from './Feedback.jsx';
import ProfileEntry from './ProfileEntry.jsx';

class Profile extends React.Component {

  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    if (this.props.profile) {
      return (
        <div className="profile-page">
          <ProfileEntry id={this.props.profile.id}
                        name={this.props.profile.name}
                        email={this.props.profile.email}
                        bio={this.props.profile.bio}
                        picture={this.props.profile.picture}
                        createdAt={this.props.profile.created_at} />
          <Feedback receiver={this.props.profile.id} />
        </div>
      );
    }
    return null;
  }
}

var mapStateToProps = function(state) {
  return {
    profile: state.profile.profile,
    id: (state.profile.current || state.user.id)
  };
};

var mapDispatchToProps = function(dispatch, ownProps) {
  return {
    fetchProfile: () => dispatch(fetchProfile(ownProps.id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);