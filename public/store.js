'use strict';

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _messenger = require('./reducers/messenger.js');

var _messenger2 = _interopRequireDefault(_messenger);

var _initialState = require('./initialState.js');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  messages: _messenger2.default
});

module.exports = (0, _redux.createStore)(reducers, (0, _initialState2.default)(), (0, _redux.applyMiddleware)(_reduxThunk2.default));
console.log('##################', module.exports.getState());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9zdG9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSSxXQUFXLDRCQUFnQjtBQUM3QjtBQUQ2QixDQUFoQixDQUFmOztBQUlBLE9BQU8sT0FBUCxHQUFpQix3QkFBWSxRQUFaLEVBQXNCLDZCQUF0QixFQUFzQyxpREFBdEMsQ0FBakI7QUFDQSxRQUFRLEdBQVIsQ0FBWSxvQkFBWixFQUFrQyxPQUFPLE9BQVAsQ0FBZSxRQUFmLEVBQWxDIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IFRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcblxuaW1wb3J0IG1lc3NlbmdlclJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9tZXNzZW5nZXIuanMnO1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZS5qcydcblxudmFyIHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgbWVzc2FnZXM6IG1lc3NlbmdlclJlZHVjZXJcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBpbml0aWFsU3RhdGUoKSwgYXBwbHlNaWRkbGV3YXJlKFRodW5rKSk7XG5jb25zb2xlLmxvZygnIyMjIyMjIyMjIyMjIyMjIyMjJywgbW9kdWxlLmV4cG9ydHMuZ2V0U3RhdGUoKSk7Il19