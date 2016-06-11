import initialState from './../store/initialState';

export default function(state = initialState(), action) {
  var i;
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
      for (i = 0; i < newState.active.length; i++) {
        if (action.message.sender === newState.active[i].id) {
          newState[action.message.sender] = newState[action.message.sender].concat(action.message);  
          return newState;
        }
      }

      newState.active = newState.active.concat({ id: action.message.sender,
                                                 name: action.name });
      return newState;
    case 'MINIMIZE':
      for (i = 0; i < newState.active.length; i++) {
        if (action.receiverId === newState.active[i].id) {
          newState.active = newState.active.slice(0, i).concat(newState.active.slice(i+1));
          break;
        }
      }
      return newState;
    case 'HIDE':
      for (i = 0; i < newState.active.length; i++) {
        if (action.receiverId === newState.active[i].id) {
          newState.active = newState.active.slice();
          newState.active[i].hide = newState.active[i].hide ? false : true;
          break;
        }
      }
      return newState;
    case 'NEW_MESSAGE_BOX':
      if (!action.chatter || !action.chatter.id || !action.chatter.name) {
        return state;
      }
      for (i = 0; i < newState.active.length; i++) {
        if (action.chatter.id === newState.active[i].id) {
          return state;
        }
      }
      newState.active = newState.active.concat(action.chatter);
      return newState;
    default: 
      return state;
  }
}
