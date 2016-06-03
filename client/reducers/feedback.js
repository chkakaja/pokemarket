export default function(state = {}, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case 'GET_FEEDBACK':
      newState = action.feedback;
      return newState;      
    default: 
      return state;
  }
}