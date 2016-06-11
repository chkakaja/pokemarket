export default function(state = [], action) {
  switch (action.type) {
    case 'SET_LEAVE_FEEDBACK':
      return action.toLeaveFeedbackArray;     
    default: 
      return state;
  }
}