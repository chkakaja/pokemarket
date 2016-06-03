export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
    case 'GET_LEAVE_FEEDBACK':
      return action.toLeaveFeedbackArray;     
    default: 
      return state;
  }
}