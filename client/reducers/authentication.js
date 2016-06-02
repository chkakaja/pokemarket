import initialState from '../initialState.js';

export default function(state = initialState(), action) {
  switch(action.type) {
    case 'SET_USER':
      if (action.user.id !== state.id) {
        // join(action.user.id);
        return action.user;
      }
      return state;
    default: 
      return state;
  }
}