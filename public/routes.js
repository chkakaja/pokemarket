'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _App = require('./components/App.jsx');

var _App2 = _interopRequireDefault(_App);

var _MessageBox = require('./components/MessageBox.jsx');

var _MessageBox2 = _interopRequireDefault(_MessageBox);

var _FacebookButton = require('./components/FacebookButton.jsx');

var _FacebookButton2 = _interopRequireDefault(_FacebookButton);

var _Landing = require('./components/Landing.jsx');

var _Landing2 = _interopRequireDefault(_Landing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: 'landing', component: _Landing2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'message', component: _MessageBox2.default })
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9yb3V0ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxPQUFPLE9BQVAsR0FDRTtBQUFBO0VBQUEsRUFBTyxNQUFLLEdBQVosRUFBZ0Isd0JBQWhCO0VBQ0Usb0RBQU8sTUFBSyxTQUFaLEVBQXNCLDRCQUF0QixHQURGO0VBRUUsb0RBQU8sTUFBSyxTQUFaLEVBQXNCLCtCQUF0QjtBQUZGLENBREYiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdFJvdXRlciwgeyBSb3V0ZSwgSW5kZXhSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAuanN4JztcbmltcG9ydCBNZXNzYWdlQm94IGZyb20gJy4vY29tcG9uZW50cy9NZXNzYWdlQm94LmpzeCc7XG5pbXBvcnQgRmFjZWJvb2tCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL0ZhY2Vib29rQnV0dG9uLmpzeCdcbmltcG9ydCBMYW5kaW5nIGZyb20gJy4vY29tcG9uZW50cy9MYW5kaW5nLmpzeCdcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwfT5cbiAgICA8Um91dGUgcGF0aD1cImxhbmRpbmdcIiBjb21wb25lbnQ9e0xhbmRpbmd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJtZXNzYWdlXCIgY29tcG9uZW50PXtNZXNzYWdlQm94fSAvPlxuICA8L1JvdXRlPlxuKTtcbiJdfQ==