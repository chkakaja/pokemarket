import initialState from '../initialState.js';

export default function(state = initialState(), action) {
  var newState = Object.assign({}, state);
  switch(action.type) {
    case 'SET_USER_ID':
      return action.userId;
    default: 
      return state;
  }
}