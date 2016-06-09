import React, { Component, Proptypes } from 'react';
import Navbar from './Navbar.jsx';
import MessageBoxes from './../message-boxes/MessageBoxes.jsx';

import { checkAuthentication } from './../../actions';
import { connect } from 'react-redux';

export default class App extends Component {

  componentWillMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div className='main-layout'>
        <Navbar />
          {this.props.children}
        <MessageBoxes />
      </div>
    );
  }

}

var mapStateToProps = function(state, ownProps) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    getUser: checkAuthentication(dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
