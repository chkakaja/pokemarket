import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import user from './reducers/user.js';
import profile from './reducers/profile.js';
import messages from './reducers/messages.js';
import { reducer as form } from 'redux-form';
import currentItem from './reducers/currentItem.js';
import filteredItems from './reducers/filteredItems.js';
import watchedItems from './reducers/watchedItems.js';
import listedItems from './reducers/listedItems.js';
import popularItems from './reducers/popularItems.js';
import initialState from './initialState.js'
import feedback from './reducers/feedback.js';
import toLeaveFeedback from './reducers/toLeaveFeedback.js';

var reducers = combineReducers({
  user,
  profile,
  messages,
  form,
  currentItem,
  watchedItems,
  filteredItems,
  listedItems,
  popularItems,
  feedback,
  toLeaveFeedback
});

export default createStore(
  reducers, 
  initialState(), 
  applyMiddleware(thunkMiddleware)
);

