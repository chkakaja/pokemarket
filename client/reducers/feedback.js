export default function(state = {}, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case 'SET_FEEDBACK':
      newState = action.feedback;
      return newState;      
    default: 
      return state;
  }
}