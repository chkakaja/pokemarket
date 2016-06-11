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
    return (
      <div className='main-layout'>
        <Navbar />
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
