'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _FacebookButton = require('/FacebookButton');

var _FacebookButton2 = _interopRequireDefault(_FacebookButton);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signin = function (_Component) {
  _inherits(Signin, _Component);

  function Signin(props) {
    _classCallCheck(this, Signin);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Signin).call(this, props));
  }

  _createClass(Signin, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'signin' },
        'Sign in using your Facebook account:',
        _react2.default.createElement(_FacebookButton2.default, { fb: FB }),
        _react2.default.createElement(
          _reactRouter2.default,
          { to: '/signup' },
          'Don\'t have an account? Sign up for one.'
        )
      );
    }
  }]);

  return Signin;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(Signin, null), document.getElementById('app'));

window.Signin = Signin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1NpZ25pbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxNOzs7QUFDSixrQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUZBQ1gsS0FEVztBQUVsQjs7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtRQUFBLEVBQUssV0FBVSxRQUFmO1FBQUE7UUFFRSwwREFBZ0IsSUFBSSxFQUFwQixHQUZGO1FBR0U7QUFBQTtVQUFBLEVBQU0sSUFBRyxTQUFUO1VBQUE7QUFBQTtBQUhGLE9BREY7QUFPRDs7Ozs7O0FBR0gsbUJBQVMsTUFBVCxDQUNHLDhCQUFDLE1BQUQsT0FESCxFQUVHLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUZIOztBQUtBLE9BQU8sTUFBUCxHQUFnQixNQUFoQiIsImZpbGUiOiJTaWduaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBGYWNlYm9va0J1dHRvbiBmcm9tICcvRmFjZWJvb2tCdXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAncmVhY3Qtcm91dGVyJztcblxuY2xhc3MgU2lnbmluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWduaW4nPlxuICAgICAgICBTaWduIGluIHVzaW5nIHlvdXIgRmFjZWJvb2sgYWNjb3VudDpcbiAgICAgICAgPEZhY2Vib29rQnV0dG9uIGZiPXtGQn0gLz5cbiAgICAgICAgPExpbmsgdG89Jy9zaWdudXAnPkRvbid0IGhhdmUgYW4gYWNjb3VudD8gU2lnbiB1cCBmb3Igb25lLjwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICAgPFNpZ25pbiAvPixcbiAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTtcblxud2luZG93LlNpZ25pbiA9IFNpZ25pbjtcbiJdfQ==