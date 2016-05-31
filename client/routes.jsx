import React from 'react';
import ReactRouter, { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import MessageBox from './components/MessageBox.jsx';
import FacebookButton from './components/FacebookButton.jsx'
import Landing from './components/Landing.jsx'
import Signin from './components/Signin.jsx'
import SellItem from './components/SellItem.jsx'

module.exports = (
  <Route path="/" component={App}>
    <Route path="message" component={MessageBox} />
    <Route path="signin" component={Signin} />
    <Route path="landing" component={Landing} />
    <Route path="sellitem" component={SellItem} />
  </Route>
);
