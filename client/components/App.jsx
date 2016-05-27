import React, { Component, Proptypes } from 'react';
import MessageBox from './MessageBox.jsx';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className='app'>
        <h2>TEST PAGE</h2>
        <MessageBox />
      </div>
    );
  }
}

module.exports = App;
