import initialState from '../initialState.js';

export default function(state = initialState(), action) {
  var newState = Object.assign({}, state);
  switch(action.type) {
    case 'SET_USER_ID':
      return action.userId;
    case 'LOGOUT_USER':
      newState = null;
      return newState;
    default: 
      return state;
  }
}