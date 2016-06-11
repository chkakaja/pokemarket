import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainLayout from './components/layout/MainLayout.jsx';
import Landing from './components/landing/Landing.jsx';
import SearchResults from './components/search-results/SearchResults.jsx';
import PersonalPage from './components/personal-page/PersonalPage.jsx';
import Item from './components/item/Item.jsx';
import SellItem from './components/sell-item/SellItem.jsx';
import Profile from './components/profile/Profile.jsx';

module.exports = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Landing} />
      <Route path="landing" component={Landing} />
      <Route path="searchresults" component={SearchResults} />
      <Route path="profile" component={Profile} />
      <Route path="personalpage" component={PersonalPage} />
      <Route path="item" component={Item} />
      <Route path="sellitem" component={SellItem} />
    </Route>
  </Router>
);