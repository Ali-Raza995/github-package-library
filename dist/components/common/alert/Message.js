"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;
var _react = _interopRequireDefault(require("react"));
var _get2 = _interopRequireDefault(require("lodash/get"));
var _reactToastify = require("react-toastify");
var _AlertBox = require("./AlertBox");
require("./styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Message {
  static error(message, heading, position, e) {
    console.log('dsd');
    (0, _reactToastify.toast)( /*#__PURE__*/_react.default.createElement(_AlertBox.AlertBox, {
      message: !message ? (0, _get2.default)(e, 'response.data.error', 'There has been an error in the options you submitted.') : message || 'There has been an error in the options you submitted.',
      heading: heading || 'Error in submission'
    }), {
      className: 'error',
      transition: _reactToastify.Slide,
      position: position || 'top-right'
    });
  }
  static success(message, heading, position) {
    (0, _reactToastify.toast)( /*#__PURE__*/_react.default.createElement(_AlertBox.AlertBox, {
      message: message || 'Your changes have been saved successfully.',
      heading: heading || 'Great Success!'
    }), {
      className: 'success',
      transition: _reactToastify.Slide,
      position: position || 'top-right'
    });
  }
}
exports.Message = Message;