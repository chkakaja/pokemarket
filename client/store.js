import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import initialState from './initialState.js'

export default createStore(
  rootReducer,
  initialState(), 
  applyMiddleware(thunkMiddleware)
);