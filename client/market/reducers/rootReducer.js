import { combineReducers } from 'redux';

import user from './user.js';
import profile from './profile.js';
import messages from './messages.js';
import { reducer as form } from 'redux-form';
import currentItem from './currentItem.js';
import filteredItems from './filteredItems.js';
import watchedItems from './watchedItems.js';
import listedItems from './listedItems.js';
import popularItems from './popularItems.js';
import feedback from './feedback.js';
import toLeaveFeedback from './toLeaveFeedback.js';

const rootReducer = combineReducers({
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

export default rootReducer;