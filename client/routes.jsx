import React from 'react';
import ReactRouter, { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import MessageBox from './components/MessageBox.jsx';
import FacebookButton from './components/FacebookButton.jsx'
import Landing from './components/Landing.jsx'

module.exports = (
  <Route path="/" component={App}>
    <Route path="landing" component={Landing} />
    <Route path="message" component={MessageBox} />
  </Route>
);
