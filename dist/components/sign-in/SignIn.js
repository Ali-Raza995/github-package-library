"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _reactI18next = require("react-i18next");
var _reactLoaderSpinner = _interopRequireDefault(require("react-loader-spinner"));
var Styles = _interopRequireWildcard(require("./SignIn.style"));
var _serverpoint = _interopRequireDefault(require("../../assets/svg/serverpoint.svg"));
var _alert = _interopRequireDefault(require("../common/alert"));
var _Checkbox = _interopRequireDefault(require("../common/checkbox/Checkbox"));
var _input = _interopRequireDefault(require("../common/input"));
var _LanguageDropdown = _interopRequireDefault(require("../language-dropdown/LanguageDropdown"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SignIn = props => {
  const {
    handleSubmit,
    loginResult,
    severity,
    title = "ServerPoint's portal",
    loginIsLoading = false,
    mode = "admin"
  } = props;
  const {
    t,
    i18n
  } = (0, _reactI18next.useTranslation)();
  const obj = localStorage.getItem("remember");
  let email = "";
  if (obj) {
    const {
      email: e
    } = JSON.parse(obj);
    email = e;
  }
  let defaultLang = i18n.language === "en-US" ? "en" : i18n.language;
  // let defaultLang = i18n.language === 'en-US' ? 'en' : "EN English";
  console.log("defaultLang", defaultLang);
  const [language, setLanguage] = (0, _react.useState)(defaultLang);
  const [userName, setUserName] = (0, _react.useState)(email);
  const [password, setPassword] = (0, _react.useState)("");
  const [open, setOpen] = (0, _react.useState)(false);
  const [isRememberPassword, setIsRememberPassword] = (0, _react.useState)(email && true);
  const _handleLanguage = value => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };
  return /*#__PURE__*/_react.default.createElement(Styles.BgLogin, null, /*#__PURE__*/_react.default.createElement(Styles.LoginContainer, null, /*#__PURE__*/_react.default.createElement(Styles.Logo, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _serverpoint.default,
    alt: "serverpoint",
    width: "100%"
  })), /*#__PURE__*/_react.default.createElement(Styles.LoginBox, null, /*#__PURE__*/_react.default.createElement(_alert.default, {
    severity: severity === "error" ? "error" : "info",
    text: t(loginResult),
    open: open,
    handleClose: () => setOpen(false)
  }), /*#__PURE__*/_react.default.createElement(Styles.LoginForm, null, /*#__PURE__*/_react.default.createElement(Styles.Heading, null, t("".concat(title))), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    type: "text",
    name: "name",
    value: userName,
    placeholder: "Username or email address",
    onKeyPress: e => {
      e.target.keyCode === 13 && e.preventDefault();
    },
    onChange: e => {
      setUserName(e.target.value);
    },
    isFormIk: false
  }), /*#__PURE__*/_react.default.createElement(_input.default, {
    type: "password",
    name: "password",
    value: password,
    placeholder: "Password",
    onKeyPress: e => {
      e.target.keyCode === 13 && e.preventDefault();
    },
    onChange: e => {
      setPassword(e.target.value);
    },
    isFormIk: false
  }), /*#__PURE__*/_react.default.createElement(Styles.SubmitForm, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "20px"
    }
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    id: "check",
    title: "Remember my username",
    value: isRememberPassword,
    setValue: setIsRememberPassword
  }), mode === "client" && /*#__PURE__*/_react.default.createElement(Styles.Forgot, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/forgot-password"
  }, t("Forgot Password")))), /*#__PURE__*/_react.default.createElement(Styles.Button, {
    type: "submit"
  }, loginIsLoading ? /*#__PURE__*/_react.default.createElement(_reactLoaderSpinner.default, {
    style: {
      display: "inline",
      marginRight: "5px"
    },
    type: "ThreeDots",
    color: "#fff",
    height: 24,
    width: 24,
    radius: 4
  }) : null, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontWeight: "bolder"
    }
  }, "Log In")))), /*#__PURE__*/_react.default.createElement(Styles.Bottom, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "20px"
    }
  }, /*#__PURE__*/_react.default.createElement(_LanguageDropdown.default, {
    language: language,
    handleLanguage: e => _handleLanguage(e)
  }), mode === "client" && /*#__PURE__*/_react.default.createElement(Styles.SignUp, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/signup"
  }, t("Sign up free"))))))));
};
var _default = exports.default = SignIn;