'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _store = require('./store.js');

var _store2 = _interopRequireDefault(_store);

var _routes = require('./routes.jsx');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(_reactRouter.Router, { routes: _routes2.default })
), document.getElementById("app"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxtQkFBUyxNQUFULENBQ0U7QUFBQTtFQUFBLEVBQVUsc0JBQVY7RUFDRSxxREFBUSx3QkFBUjtBQURGLENBREYsRUFJRSxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FKRiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUuanMnO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcy5qc3gnO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgcm91dGVzPXtyb3V0ZXN9Lz5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpXG4pO1xuIl19