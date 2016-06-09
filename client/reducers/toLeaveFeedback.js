export default function(state = [], action) {
  switch (action.type) {
    case 'GET_LEAVE_FEEDBACK':
      return action.toLeaveFeedbackArray;     
    default: 
      return state;
  }
}