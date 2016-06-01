module.exports = function(state = [], action) {
  var newState = state.slice();
  switch (action.type) {
    case 'UPDATE_SEARCH_RESULTS':
      action.results.forEach(function(item) {
        newState.push(item);
      });
      return newState;
    default:
      return state;
  }
};
