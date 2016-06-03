import { combineReducers, createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

import {reducer as formReducer} from 'redux-form';

import messengerReducer from './reducers/messenger.js';
import authenticationReducer from './reducers/authentication.js';
import getItemDataReducer from './reducers/getItemData.js';
import searchItemsReducer from './reducers/searchItems.js';
import setWatchedItemsReducer from './reducers/setWatchedItems.js';
import setListedItemsReducer from './reducers/setListedItems.js';
import setPopularItemsReducer from './reducers/setPopularItems.js';
import initialState from './initialState.js'

var reducers = combineReducers({
  messages: messengerReducer,
  form: formReducer,
  user: authenticationReducer,
  item: getItemDataReducer,
  filteredItems: searchItemsReducer,
  watchedItems: setWatchedItemsReducer,
  listedItems: setListedItemsReducer,
  popularItems: setPopularItemsReducer
});

module.exports = createStore(reducers, initialState(), applyMiddleware(Thunk));

