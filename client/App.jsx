import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainLayout from './components/MainLayout.jsx';
import MessageBoxes from './components/MessageBoxes.jsx';
import FacebookButton from './components/FacebookButton.jsx';
import Landing from './components/Landing.jsx';
import Signin from './components/Signin.jsx';
import SellItem from './components/SellItem.jsx';
import Navbar from './components/Navbar.jsx';
import Item from './components/Item.jsx';
import SearchResults from './components/SearchResults.jsx';
import WatchedItems from './components/WatchedItems.jsx';
import Feedback from './components/Feedback.jsx';
import LeaveFeedback from './components/LeaveFeedback.jsx';
import Profile from './components/Profile.jsx';
import PersonalPage from './components/PersonalPage.jsx';

module.exports = () => (
  <Router>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Landing} />
      <Route path="landing" component={Landing} />
      <Route path="profile" component={Profile} />
      <Route path="personalpage" component={PersonalPage} />
      <Route path="signin" component={Signin} />
      <Route path="item" component={Item} />
      <Route path="sellitem" component={SellItem} />
      <Route path="searchresults" component={SearchResults} />
      <Route path="watcheditems" component={WatchedItems} />
      <Route path="feedback" component={Feedback} />
      <Route path="leavefeedback" component={LeaveFeedback} />
      <Route path="message" component={MessageBoxes} />
    </Route>
  </Router>
);
