import { combineReducers, createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

import {reducer as formReducer} from 'redux-form';

import messengerReducer from './reducers/messenger.js';
import authenticationReducer from './reducers/authentication.js';
import getItemDataReducer from './reducers/getItemData.js';
import searchItemsReducer from './reducers/searchItems.js';
import initialState from './initialState.js'
import feedbackReducer from './reducers/feedback.js';
import toLeaveFeedbackReducer from './reducers/leaveFeedback.js';

var reducers = combineReducers({
  messages: messengerReducer,
  form: formReducer,
  user: authenticationReducer,
  item: getItemDataReducer,
  filteredItems: searchItemsReducer,
  feedback: feedbackReducer,
  toLeaveFeedback: toLeaveFeedbackReducer
});

module.exports = createStore(reducers, initialState(), applyMiddleware(Thunk));

