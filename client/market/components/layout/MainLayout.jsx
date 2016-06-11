import React, { Proptypes } from 'react';

import Navbar from './NavBar.jsx';
import MessageBoxes from './../message-boxes/MessageBoxes.jsx';

import { fetchUser } from './../../actions';
import { connect } from 'react-redux';

export default class App extends React.Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    let haggleUrl = '/haggle?' + 'id=' + Math.floor((Math.random() * 10000000)).toString() + '&';
    return (
      <div className='main-layout'>
        <Navbar />
          <a href={haggleUrl +'init=1'} target="_blank">Video Initiate</a>
          <a href={haggleUrl +'init=0'} target="_blank">Video Respond</a>
          {this.props.children}
        <MessageBoxes />
      </div>
    );
  }
}

var mapDispatchToProps = function(dispatch) {
  return {
    fetchUser: () => dispatch(fetchUser())
  }
};

export default connect(() => ({}), mapDispatchToProps)(App);
