import { combineReducers, createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
<<<<<<< 9bf3860b5a970d904cd7de35a47e2b7190801d56
import {reducer as formReducer} from 'redux-form';
=======
>>>>>>> Got rid of DS_Store

import messengerReducer from './reducers/messenger.js';
import initialState from './initialState.js'

var reducers = combineReducers({
<<<<<<< 9bf3860b5a970d904cd7de35a47e2b7190801d56
  messages: messengerReducer,
  form: formReducer
});

module.exports = createStore(reducers, initialState(), applyMiddleware(Thunk));
=======
  messages: messengerReducer
});

module.exports = createStore(reducers, initialState(), applyMiddleware(Thunk));
console.log('##################', module.exports.getState());
>>>>>>> Got rid of DS_Store
