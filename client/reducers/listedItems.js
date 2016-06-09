module.exports = function(state = [], action) {
  var newState = [];
  switch (action.type) {
    case 'UPDATE_LISTED_ITEMS':
      action.data.forEach(function(item) {
        newState.push(item);
      });
      return newState;
    default:
      return state;
  }
};
