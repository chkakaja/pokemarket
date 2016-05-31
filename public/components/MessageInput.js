'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageInput = function (_Component) {
  _inherits(MessageInput, _Component);

  function MessageInput() {
    _classCallCheck(this, MessageInput);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MessageInput).apply(this, arguments));
  }

  _createClass(MessageInput, [{
    key: 'clearInput',
    value: function clearInput(event) {
      event.target.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'message-input' },
        _react2.default.createElement(
          'form',
          { onSubmit: this.clearInput, action: 'sendMessage', method: 'post' },
          _react2.default.createElement('input', { type: 'text', name: 'message' })
        )
      );
    }
  }]);

  return MessageInput;
}(_react.Component);

module.exports = MessageInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL01lc3NhZ2VJbnB1dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNLFk7Ozs7Ozs7Ozs7OytCQUVPLEssRUFBTztBQUNoQixZQUFNLE1BQU4sQ0FBYSxLQUFiLEdBQXFCLEVBQXJCO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtRQUFBLEVBQUssV0FBVSxlQUFmO1FBQ0U7QUFBQTtVQUFBLEVBQU0sVUFBVSxLQUFLLFVBQXJCLEVBQWlDLFFBQU8sYUFBeEMsRUFBc0QsUUFBTyxNQUE3RDtVQUNFLHlDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLFNBQXhCO0FBREY7QUFERixPQURGO0FBT0Q7Ozs7OztBQUVILE9BQU8sT0FBUCxHQUFpQixZQUFqQiIsImZpbGUiOiJNZXNzYWdlSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgTWVzc2FnZUlucHV0IGV4dGVuZHMgQ29tcG9uZW50IHsgXG5cbiAgY2xlYXJJbnB1dChldmVudCkge1xuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZS1pbnB1dCc+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmNsZWFySW5wdXR9IGFjdGlvbj0nc2VuZE1lc3NhZ2UnIG1ldGhvZD0ncG9zdCc+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J21lc3NhZ2UnIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gTWVzc2FnZUlucHV0OyJdfQ==