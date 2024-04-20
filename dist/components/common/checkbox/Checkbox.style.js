"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RememberCheckBox = exports.Input = exports.CheckBox = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _checkBox = _interopRequireDefault(require("../../../assets/svg/check-box.svg"));
var _uncheckBox = _interopRequireDefault(require("../../../assets/svg/uncheck-box.svg"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const CheckBox = exports.CheckBox = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding-top: 5px;\n  padding-right: 10px;\n"])));
const Input = exports.Input = _styledComponents.default.input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  appearance: none;\n  outline: 0 !important;\n  padding: 0;\n  margin: 0 !important;\n  top: 0;\n  background: url(", ") no-repeat;\n  height: 25px;\n  width: 25px;\n  background-size: 25px;\n  cursor: pointer !important;\n  &:checked {\n    background: url(", ") no-repeat;\n    height: 25px;\n    width: 25px;\n    background-size: 25px;\n  }\n"])), _uncheckBox.default, _checkBox.default);
const RememberCheckBox = exports.RememberCheckBox = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding-right: 10px;\n  margin-top: 5px;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n  border-bottom: ", ";\n  width: 15em;\n"])), props => props.isChecked ? '#cfcfcf' : 'white', props => props.isChecked ? '2px solid orange' : '2px solid white');