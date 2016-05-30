'use strict';

var _initialState = require('../initialState.js');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _initialState2.default)() : arguments[0];
  var action = arguments[1];

  console.log('#################', state);
  var newState = Object.assign({}, state);
  switch (action.type) {
    case 'UPDATE_MESSAGES':
      newState.messages[action.userId] = action.messages;
      return newState;
    default:
      return state;
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9yZWR1Y2Vycy9tZXNzZW5nZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLFlBQXlDO0FBQUEsTUFBaEMsS0FBZ0MseURBQXhCLDZCQUF3QjtBQUFBLE1BQVIsTUFBUTs7QUFDeEQsVUFBUSxHQUFSLENBQVksbUJBQVosRUFBa0MsS0FBbEM7QUFDQSxNQUFJLFdBQVcsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFsQixDQUFmO0FBQ0EsVUFBUSxPQUFPLElBQWY7QUFDRSxTQUFLLGlCQUFMO0FBQ0UsZUFBUyxRQUFULENBQWtCLE9BQU8sTUFBekIsSUFBbUMsT0FBTyxRQUExQztBQUNBLGFBQU8sUUFBUDtBQUNGO0FBQ0UsYUFBTyxLQUFQO0FBTEo7QUFPRCxDQVZEIiwiZmlsZSI6Im1lc3Nlbmdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi4vaW5pdGlhbFN0YXRlLmpzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzdGF0ZSA9IGluaXRpYWxTdGF0ZSgpLCBhY3Rpb24pIHtcbiAgY29uc29sZS5sb2coJyMjIyMjIyMjIyMjIyMjIyMjJyAsIHN0YXRlKTtcbiAgdmFyIG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnVVBEQVRFX01FU1NBR0VTJzogXG4gICAgICBuZXdTdGF0ZS5tZXNzYWdlc1thY3Rpb24udXNlcklkXSA9IGFjdGlvbi5tZXNzYWdlcztcbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICBkZWZhdWx0OiBcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSAgIFxuXG4iXX0=