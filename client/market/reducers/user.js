import initialState from './../store/initialState.js';

export default function(state = initialState(), action) {
  switch(action.type) {
    case 'SET_USER':
      if (action.user.id !== state.id) {
        return action.user;
      }
      return state;
    case 'LOGOUT_USER':
      newState = null;
      return newState;
    default: 
      return state;
  }
}