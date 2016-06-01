import initialState from '../initialState.js';

export default function(state = initialState(), action) {
  var newState = Object.assign({}, state);
  switch(action.type) {
    case 'SET_USER':
      return action.user;
    default: 
      return state;
  }
}