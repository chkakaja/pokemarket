export default function(state = {}, action) {
  console.log('profile reducer', state, action);
  var newState = Object.assign({}, state);
  switch(action.type) {
    case 'SET_PROFILE_USER':
      newState.current = action.current;
      return newState;
    case 'UPDATE_PROFILE':
      newState.profile = action.profile;
      return newState;
    default: 
      return state;
  }
}
