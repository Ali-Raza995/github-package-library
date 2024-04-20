"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedDropdown = exports.DropdownList = exports.DropdownContainer = exports.Dropdown = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const DropdownContainer = exports.DropdownContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 2px;\n  display: flex;\n  align-items: center;\n  h6 {\n    margin: 0;\n  }\n  i {\n    margin-top: -8px;\n    margin-right: 0.7em;\n  }\n  cursor: pointer;\n"])));
const DropdownList = exports.DropdownList = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n  padding: 0.5em 1em;\n  .bold {\n    text-transform: uppercase;\n    font-weight: bold;\n    width: 2em;\n  }\n  &:hover {\n    background: #d1d1d1;\n  }\n"])));
const SelectedDropdown = exports.SelectedDropdown = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  .bold {\n    text-transform: uppercase;\n    font-weight: bold;\n    margin-right: 0.6em;\n  }\n"])));
const Dropdown = exports.Dropdown = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 8px 0;\n  cursor: pointer;\n  z-index: 10;\n  background: white;\n  width: 10em;\n  border-radius: 5px;\n  p {\n    margin: 0;\n  }\n"])));