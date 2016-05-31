'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MessageBox = require('./MessageBox.jsx');

var _MessageBox2 = _interopRequireDefault(_MessageBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
          'h2',
          null,
          'TEST PAGE'
        ),
        _react2.default.createElement(_MessageBox2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

module.exports = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNLEc7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUNsQixjQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQWpCO0FBQ0Q7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtRQUFBLEVBQUssV0FBVSxLQUFmO1FBQ0U7QUFBQTtVQUFBO1VBQUE7QUFBQSxTQURGO1FBRUU7QUFGRixPQURGO0FBTUQ7Ozs7OztBQUdILE9BQU8sT0FBUCxHQUFpQixHQUFqQiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wdHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVzc2FnZUJveCBmcm9tICcuL01lc3NhZ2VCb3guanN4JztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYXBwJz5cbiAgICAgICAgPGgyPlRFU1QgUEFHRTwvaDI+XG4gICAgICAgIDxNZXNzYWdlQm94IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuIl19