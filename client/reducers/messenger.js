import initialState from '../initialState.js';

module.exports = function(state = initialState(), action) {
  console.log('#################' , state);
  var newState = Object.assign({}, state);
  switch (action.type) {
    case 'UPDATE_MESSAGES': 
      newState.messages[action.userId] = action.messages;
      return newState;
    default: 
      return state;
  }
}   

