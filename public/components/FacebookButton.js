'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactFacebookLogin = require('react-facebook-login');

var _reactFacebookLogin2 = _interopRequireDefault(_reactFacebookLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import React, { Component, PropTypes } from 'react';

// export default class FacebookButton extends Component {
//    constructor(props) {
//       super(props);

//       this.FB = props.fb;

//       this.state = {
//          message: ""
//       };

//    }

//    componentDidMount() {
//       // need logout and statusChange for auth action
//       this.FB.Event.subscribe('auth.logout',
//          this.onLogout.bind(this));
//       this.FB.Event.subscribe('auth.statusChange',
//          this.onStatusChange.bind(this));

//       // check to see if
//       this.FB.getLoginStatus((response) => {
//          statusChangeCallback(response);
//       });
//    }

//    onStatusChange(response) {
//       console.log(response);
//       var self = this;

//       if (response.status === 'connected') {
//          this.FB.api('/me', function(response) {
//             var message = 'Welcome ' + response.name;
//             // dispatch an action?
//             self.setState({
//                message: message
//             });
//          })
//       }
//    }

//    onLogout(response) {
//       // dispatch an action instead?
//       this.setState({
//          message: ""
//       });
//    }

//    render() {
//       return (
//          <div>
//             <div
//                className="fb-login-button"
//                data-max-rows="1"
//                data-size="xlarge"
//                data-show-faces="false"
//                data-auto-logout-link="true"
//                >
//             </div>
//             <div>{this.state.message}</div>
//          </div>
//       );
//    }
// };

// window.FacebookButton = FacebookButton;

var responseFacebook = function responseFacebook(response) {
  console.log(response);
};

var FacebookButton = function (_Component) {
  _inherits(FacebookButton, _Component);

  function FacebookButton() {
    _classCallCheck(this, FacebookButton);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FacebookButton).apply(this, arguments));
  }

  _createClass(FacebookButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactFacebookLogin2.default, {
        appId: '523442607845905',
        autoLoad: true,
        callback: responseFacebook });
    }
  }]);

  return FacebookButton;
}(_react.Component);

module.exports = FacebookButton;

// dom render below
// import React from 'react';
// import FacebookButton from './components/FacebookButton';

// ReactDOM.render(
//    <FacebookButton fb={FB} />,
//    document.getElementById('facebook-login')
// );
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0ZhY2Vib29rQnV0dG9uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBb0VBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxtQkFBbUIsU0FBbkIsZ0JBQW1CLENBQUMsUUFBRCxFQUFjO0FBQ3JDLFVBQVEsR0FBUixDQUFZLFFBQVo7QUFDRCxDQUZEOztJQUlNLGM7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsYUFDQTtBQUNFLGVBQU0saUJBRFI7QUFFRSxrQkFBVSxJQUZaO0FBR0Usa0JBQVUsZ0JBSFosR0FEQTtBQU1EOzs7Ozs7QUFHSCxPQUFPLE9BQVAsR0FBaUIsY0FBakIiLCJmaWxlIjoiRmFjZWJvb2tCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2Vib29rQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbi8vICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgICBzdXBlcihwcm9wcyk7XG5cbi8vICAgICAgIHRoaXMuRkIgPSBwcm9wcy5mYjtcblxuLy8gICAgICAgdGhpcy5zdGF0ZSA9IHtcbi8vICAgICAgICAgIG1lc3NhZ2U6IFwiXCJcbi8vICAgICAgIH07XG5cbi8vICAgIH1cblxuLy8gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4vLyAgICAgICAvLyBuZWVkIGxvZ291dCBhbmQgc3RhdHVzQ2hhbmdlIGZvciBhdXRoIGFjdGlvblxuLy8gICAgICAgdGhpcy5GQi5FdmVudC5zdWJzY3JpYmUoJ2F1dGgubG9nb3V0JywgXG4vLyAgICAgICAgICB0aGlzLm9uTG9nb3V0LmJpbmQodGhpcykpO1xuLy8gICAgICAgdGhpcy5GQi5FdmVudC5zdWJzY3JpYmUoJ2F1dGguc3RhdHVzQ2hhbmdlJywgXG4vLyAgICAgICAgICB0aGlzLm9uU3RhdHVzQ2hhbmdlLmJpbmQodGhpcykpO1xuXG4vLyAgICAgICAvLyBjaGVjayB0byBzZWUgaWYgXG4vLyAgICAgICB0aGlzLkZCLmdldExvZ2luU3RhdHVzKChyZXNwb25zZSkgPT4ge1xuLy8gICAgICAgICAgc3RhdHVzQ2hhbmdlQ2FsbGJhY2socmVzcG9uc2UpO1xuLy8gICAgICAgfSk7XG4vLyAgICB9XG4gICAgICBcbi8vICAgIG9uU3RhdHVzQ2hhbmdlKHJlc3BvbnNlKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4vLyAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbi8vICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XG4vLyAgICAgICAgICB0aGlzLkZCLmFwaSgnL21lJywgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbi8vICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gJ1dlbGNvbWUgJyArIHJlc3BvbnNlLm5hbWU7XG4vLyAgICAgICAgICAgICAvLyBkaXNwYXRjaCBhbiBhY3Rpb24/XG4vLyAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcbi8vICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2Vcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgfSlcbi8vICAgICAgIH1cbi8vICAgIH1cblxuLy8gICAgb25Mb2dvdXQocmVzcG9uc2UpIHtcbi8vICAgICAgIC8vIGRpc3BhdGNoIGFuIGFjdGlvbiBpbnN0ZWFkP1xuLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4vLyAgICAgICAgICBtZXNzYWdlOiBcIlwiXG4vLyAgICAgICB9KTtcbi8vICAgIH1cblxuLy8gICAgcmVuZGVyKCkge1xuLy8gICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IFxuLy8gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmItbG9naW4tYnV0dG9uXCIgXG4vLyAgICAgICAgICAgICAgICBkYXRhLW1heC1yb3dzPVwiMVwiIFxuLy8gICAgICAgICAgICAgICAgZGF0YS1zaXplPVwieGxhcmdlXCIgXG4vLyAgICAgICAgICAgICAgICBkYXRhLXNob3ctZmFjZXM9XCJmYWxzZVwiIFxuLy8gICAgICAgICAgICAgICAgZGF0YS1hdXRvLWxvZ291dC1saW5rPVwidHJ1ZVwiXG4vLyAgICAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXY+e3RoaXMuc3RhdGUubWVzc2FnZX08L2Rpdj5cbi8vICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgKTtcbi8vICAgIH1cbi8vIH07XG5cbi8vIHdpbmRvdy5GYWNlYm9va0J1dHRvbiA9IEZhY2Vib29rQnV0dG9uO1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBGYWNlYm9va0xvZ2luIGZyb20gJ3JlYWN0LWZhY2Vib29rLWxvZ2luJztcbiBcbmNvbnN0IHJlc3BvbnNlRmFjZWJvb2sgPSAocmVzcG9uc2UpID0+IHtcbiAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xufVxuIFxuY2xhc3MgRmFjZWJvb2tCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICA8RmFjZWJvb2tMb2dpblxuICAgICAgYXBwSWQ9XCI1MjM0NDI2MDc4NDU5MDVcIlxuICAgICAgYXV0b0xvYWQ9e3RydWV9XG4gICAgICBjYWxsYmFjaz17cmVzcG9uc2VGYWNlYm9va30gLz5cbiAgICApXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmFjZWJvb2tCdXR0b247XG5cbi8vIGRvbSByZW5kZXIgYmVsb3dcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgRmFjZWJvb2tCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL0ZhY2Vib29rQnV0dG9uJztcblxuLy8gUmVhY3RET00ucmVuZGVyKFxuLy8gICAgPEZhY2Vib29rQnV0dG9uIGZiPXtGQn0gLz4sXG4vLyAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2stbG9naW4nKVxuLy8gKTtcbiJdfQ==