import { combineReducers, createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

import {reducer as formReducer} from 'redux-form';

import messengerReducer from './reducers/messenger.js';
import authenticationReducer from './reducers/authentication.js';
import getItemDataReducer from './reducers/getItemData.js';
import searchItemsReducer from './reducers/searchItems.js';
import initialState from './initialState.js'

var reducers = combineReducers({
  messages: messengerReducer,
  form: formReducer,
<<<<<<< HEAD
  user: authenticationReducer
=======
  userId: authenticationReducer,
  item: getItemDataReducer,
  filteredItems: searchItemsReducer
>>>>>>> 4be2b1de844384331377c0a35e0f327015d3c9a8
});

module.exports = createStore(reducers, initialState(), applyMiddleware(Thunk));
