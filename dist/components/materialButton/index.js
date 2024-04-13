"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MaterialButton = _ref => {
  let {
    bgColor = "green"
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_material.Button, {
    sx: {
      backgroundColor: bgColor
    }
  }, "Material UI Button with color prop ", bgColor);
};
var _default = exports.default = MaterialButton;