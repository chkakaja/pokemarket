'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash.assign');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  values: {}
};

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case FORM_UPDATE_VALUE:
      return (0, _lodash2.default)({}, state, {
        values: (0, _lodash2.default)({}, state.values, _defineProperty({}, action.name, action.value))
      });

    case FORM_RESET:
      return initialState;

    default:
      return state;
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9yZWR1Y2Vycy9zZWxsSXRlbVN1Ym1pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFNLGVBQWU7QUFDbkIsVUFBUTtBQURXLENBQXJCOztrQkFJZSxZQUFrQztBQUFBLE1BQWpDLEtBQWlDLHlEQUF6QixZQUF5QjtBQUFBLE1BQVgsTUFBVzs7QUFDL0MsVUFBUSxPQUFPLElBQWY7QUFDRSxTQUFLLGlCQUFMO0FBQ0UsYUFBTyxzQkFBTyxFQUFQLEVBQVcsS0FBWCxFQUFrQjtBQUN2QixnQkFBUSxzQkFBTyxFQUFQLEVBQVcsTUFBTSxNQUFqQixzQkFDTCxPQUFPLElBREYsRUFDUyxPQUFPLEtBRGhCO0FBRGUsT0FBbEIsQ0FBUDs7QUFNQSxTQUFLLFVBQUw7QUFDRSxhQUFPLFlBQVA7O0FBRUY7QUFDRSxhQUFPLEtBQVA7QUFaTjtBQWNELEMiLCJmaWxlIjoic2VsbEl0ZW1TdWJtaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzaWduIGZyb20gJ2xvZGFzaC5hc3NpZ24nO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHZhbHVlczoge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEZPUk1fVVBEQVRFX1ZBTFVFOlxuICAgICAgcmV0dXJuIGFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdmFsdWVzOiBhc3NpZ24oe30sIHN0YXRlLnZhbHVlcywge1xuICAgICAgICAgIFthY3Rpb24ubmFtZV06IGFjdGlvbi52YWx1ZVxuICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICAgIGNhc2UgRk9STV9SRVNFVDpcbiAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=