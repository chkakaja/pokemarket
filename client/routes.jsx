import React from 'react';
import ReactRouter, { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import MessageBox from './components/MessageBox.jsx';

module.exports = (
  <Route path="/" component={App}>
    <Route path="message" component={MessageBox} />
  </Route>
);
