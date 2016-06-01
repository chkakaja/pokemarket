import { combineReducers, createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

import messengerReducer from './reducers/messenger.js';
import getItemDataReducer from './reducers/getItemData.js';
import initialState from './initialState.js';

var reducers = combineReducers({
  messages: messengerReducer,
  form: formReducer,
  item: getItemDataReducer
});

module.exports = createStore(reducers, initialState(), applyMiddleware(Thunk));
