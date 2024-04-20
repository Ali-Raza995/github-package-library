"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertBox = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const AlertBox = _ref => {
  let {
    message,
    heading
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: '14px'
    }
  }, /*#__PURE__*/_react.default.createElement("h4", null, heading), /*#__PURE__*/_react.default.createElement("p", null, message)));
};
exports.AlertBox = AlertBox;