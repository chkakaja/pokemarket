import initialState from '../initialState.js';

export default function(state = initialState(), action) {
  var newState = Object.assign({}, state);
  // console.log('state =', state, action, 'NEW =', newState);
  switch (action.type) {
    case 'UPDATE_MESSAGES': 
      newState[action.receiver] = action.messages;
      return newState;
    case 'UPDATE_MESSAGE':
      newState[action.message.receiver] = (newState[action.message.receiver] || []);
      action.message.id = newState[action.message.receiver].length;
      newState[action.message.receiver] = newState[action.message.receiver].concat(action.message);
      return newState;
    case 'GOT_MESSAGE':
      if (newState.active.indexOf(action.message.sender) !== -1 ) {
        newState[action.message.sender] = newState[action.message.sender].concat(action.message);
      } else {
        newState.active = newState.active.concat(action.message.sender);
      }
      return newState;
    default: 
      return state;
  }
}
