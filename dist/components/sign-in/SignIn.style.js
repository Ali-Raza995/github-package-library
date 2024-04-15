"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubmitForm = exports.Logo = exports.LoginForm = exports.LoginContainer = exports.LoginButton = exports.LoginBox = exports.Heading = exports.Button = exports.Bottom = exports.BgLogin = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _resuableCss = require("../../utils/resuable-css");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10; // import BackgroundImage from '../../assets/svg/bgloginportalclientgrey.svg';
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const BgLogin = exports.BgLogin = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-size: cover;\n  font-weight: 400 !important;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
const LoginContainer = exports.LoginContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  padding: 2em 0;\n"])));
const LoginBox = exports.LoginBox = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background: #fff;\n  margin: 0 auto;\n  width: 452px;\n  border-radius: 5px;\n  box-shadow: 0 0 24px 5px #d1d1d1;\n  @media (max-width: 500px) {\n    width: 350px;\n  }\n  @media (max-width: 400px) {\n    width: 310px;\n  }\n  @media (max-width: 330px) {\n    width: 290px;\n  }\n"])));
const LoginForm = exports.LoginForm = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 40px 30px;\n"])));
const Logo = exports.Logo = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 0 0 10px 2em;\n  text-align: center;\n  width: 380px;\n  @media (max-width: 425px) {\n    width: 290px;\n  }\n  @media (max-width: 375px) {\n    width: 250px;\n  }\n  @media (max-width: 375px) {\n    width: 230px;\n  }\n"])));
const Heading = exports.Heading = _styledComponents.default.h4(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  /* font-size: ", "; */\n  font-size: 26px;\n  ", ";\n  font-weight: bolder;\n  color: black;\n  text-align: center;\n  padding-bottom: 20px;\n  margin: 0 3rem;\n  @media (max-width: 425px) {\n    padding-bottom: 5px;\n  }\n  @media (max-width: 500px) {\n    margin: 0 2rem;\n  }\n  @media (max-width: 330px) {\n    margin: 0 1rem;\n  }\n"])), props => {
  var _props$theme$default;
  return (_props$theme$default = props.theme.default) === null || _props$theme$default === void 0 ? void 0 : _props$theme$default.h4;
}, props => (0, _resuableCss.h4Styles)(props.theme.resolutions));
const SubmitForm = exports.SubmitForm = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  label {\n    padding-top: 2px;\n    text-align: 20px;\n    color: black;\n    cursor: pointer;\n  }\n"])));
const LoginButton = exports.LoginButton = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin-top: 18px;\n"])));
const Button = exports.Button = _styledComponents.default.button(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  background: #ff7300;\n  height: 3.5em;\n  margin-top: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  padding: 11px 0px;\n  width: 392px;\n  position: relative;\n  cursor: pointer;\n  outline: none;\n  text-align: center;\n  @media (max-width: 500px) {\n    width: 290px;\n  }\n  @media (max-width: 384px) {\n    width: 250px;\n  }\n  @media (max-width: 320px) {\n    width: 230px;\n  }\n"])));
const Bottom = exports.Bottom = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 2em;\n"])));