import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../reducers/rootReducer.js';
import initialState from './initialState.js';
import thunkMiddleware from 'redux-thunk';

export default createStore(
  rootReducer,
  initialState(), 
  applyMiddleware(thunkMiddleware)
);