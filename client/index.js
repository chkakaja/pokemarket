import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import store from './store.js';
import routes from './routes.jsx';

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes}/>
  </Provider>,
  document.getElementById("app")
);

