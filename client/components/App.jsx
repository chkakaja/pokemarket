import React, { Component, Proptypes } from 'react';
import MessageBox from './MessageBox.jsx';
import FacebookButton from './FacebookButton.jsx';
import Signin from './Signin.jsx';
import SellItem from './SellItem.jsx'

class App extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className='app'>
        <h2>TEST PAGE</h2>
        <SellItem />
        <Signin />
        <MessageBox />
      </div>
    );
  }
}

module.exports = App;
