'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _FacebookButton = require('/FacebookButton');

var _FacebookButton2 = _interopRequireDefault(_FacebookButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_Component) {
  _inherits(Signup, _Component);

  function Signup(props) {
    _classCallCheck(this, Signup);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Signup).call(this, props));
  }

  _createClass(Signup, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'signup' },
        'Sign up for an account using your Facebook account:',
        _react2.default.createElement(_FacebookButton2.default, { fb: FB }),
        _react2.default.createElement(
          Link,
          { to: '/signin' },
          'Already have an account? Sign in.'
        )
      );
    }
  }]);

  return Signup;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(Signup, null), document.getElementById('app'));

window.Signup = Signup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1NpZ251cC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU0sTTs7O0FBQ0osa0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHFGQUNYLEtBRFc7QUFFbEI7Ozs7NkJBRVM7QUFDUixhQUNFO0FBQUE7UUFBQSxFQUFLLFdBQVUsUUFBZjtRQUFBO1FBRUUsMERBQWdCLElBQUksRUFBcEIsR0FGRjtRQUdFO0FBQUMsY0FBRDtVQUFBLEVBQU0sSUFBRyxTQUFUO1VBQUE7QUFBQTtBQUhGLE9BREY7QUFPRDs7Ozs7O0FBR0gsbUJBQVMsTUFBVCxDQUNHLDhCQUFDLE1BQUQsT0FESCxFQUVHLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUZIOztBQUtBLE9BQU8sTUFBUCxHQUFnQixNQUFoQiIsImZpbGUiOiJTaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBGYWNlYm9va0J1dHRvbiBmcm9tICcvRmFjZWJvb2tCdXR0b24nO1xuXG5jbGFzcyBTaWdudXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZ251cCc+XG4gICAgICAgIFNpZ24gdXAgZm9yIGFuIGFjY291bnQgdXNpbmcgeW91ciBGYWNlYm9vayBhY2NvdW50OlxuICAgICAgICA8RmFjZWJvb2tCdXR0b24gZmI9e0ZCfSAvPlxuICAgICAgICA8TGluayB0bz0nL3NpZ25pbic+QWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IFNpZ24gaW4uPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gICA8U2lnbnVwIC8+LFxuICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuXG53aW5kb3cuU2lnbnVwID0gU2lnbnVwO1xuIl19