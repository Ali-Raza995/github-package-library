"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = _ref => {
  let {
    btnText = "Ali ka button",
    bgColor = "red",
    textColor = "white"
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    style: {
      padding: "20px",
      color: textColor,
      backgroundColor: bgColor,
      borderRadius: "10px",
      fontSize: "16px"
    }
  }, btnText);
};
var _default = exports.default = Button;