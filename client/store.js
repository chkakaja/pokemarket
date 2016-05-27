import { combineReducers, createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

import messengerReducer from './reducers/messenger.js';
import initialState from './initialState.js'

var reducers = combineReducers({
  messages: messengerReducer
});

module.exports = createStore(reducers, initialState(), applyMiddleware(Thunk));
console.log('##################', module.exports.getState());