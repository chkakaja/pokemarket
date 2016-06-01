module.exports = function(state = [], action) {
  var newState = state.slice();
  switch (action.type) {
    case 'CLEAR_SEARCH_RESULTS':
      newState = [];
      return newState;
    case 'UPDATE_SEARCH_RESULTS':
      action.results.forEach(function(item) {
        newState.push(item);
      });
      return newState;
    default:
      return state;
  }
};
