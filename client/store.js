import { combineReducers, createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

import {reducer as formReducer} from 'redux-form';

import messengerReducer from './reducers/messenger.js';
import authenticationReducer from './reducers/authentication.js';
import searchItemsReducer from './reducers/searchItems.js';
import setWatchedItemsReducer from './reducers/setWatchedItems.js';
import setListedItemsReducer from './reducers/setListedItems.js';
import setPopularItemsReducer from './reducers/setPopularItems.js';
import setCurrentItemReducer from './reducers/setCurrentItem.js';
import initialState from './initialState.js'
import feedbackReducer from './reducers/feedback.js';
import toLeaveFeedbackReducer from './reducers/leaveFeedback.js';

var reducers = combineReducers({
  messages: messengerReducer,
  form: formReducer,
  user: authenticationReducer,
  filteredItems: searchItemsReducer,
  feedback: feedbackReducer,
  toLeaveFeedback: toLeaveFeedbackReducer,
  filteredItems: searchItemsReducer,
  watchedItems: setWatchedItemsReducer,
  listedItems: setListedItemsReducer,
  popularItems: setPopularItemsReducer,
  currentItem: setCurrentItemReducer
});

module.exports = createStore(reducers, initialState(), applyMiddleware(Thunk));

