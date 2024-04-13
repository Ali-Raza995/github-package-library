"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ButtonComponent = _ref => {
  let {
    btnText = "Ali ka button",
    bgColor = "red",
    textColor = "white"
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_material.Button, {
    sx: {
      backgroundColor: bgColor,
      color: textColor
    }
  }, "Material UI Button with color prop ", bgColor, " and btn text ", btnText), /*#__PURE__*/_react.default.createElement(_material.Typography, null, "Hello fro typography"), /*#__PURE__*/_react.default.createElement("p", null, "Component testing"));
};
var _default = exports.default = ButtonComponent;