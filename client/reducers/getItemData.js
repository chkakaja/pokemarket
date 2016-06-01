module.exports = function(state = { seller: { name: '', picture: '' } }, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case 'UPDATE_ITEM_DATA':
      for (var key in action.item) {
        newState[key] = action.item[key];
      }
      return newState;
    default:
      return state;
  }
};
