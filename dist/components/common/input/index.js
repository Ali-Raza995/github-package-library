"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.string.trim.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
require("./input.css");
var _material = require("@mui/material");
var _styles = require("@mui/styles");
var _reactI18next = require("react-i18next");
const _excluded = ["styling", "placeholder", "touched", "error", "name", "value", "onChange", "className", "isFormIk", "handleClickShowPassword", "PasswordInput", "inputProps", "loading", "EndAdornment", "onEnter", "validateBorderColor", "validateBorderCondition", "validateLoading", "dataTooltip", "tooltipStyles", "onBlur", "onFocus", "largerFont", "headerInputClass", "formik"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // import { ErrorMessage } from 'formik';
// import { InputTooltip } from '../../components/input-tooltip/input-tooltip';
// Here validate border condition is added because of user management page where we are validating the user exist in the database or not while adding the subuser.
const useStyles = (0, _styles.makeStyles)(props => (0, _styles.createStyles)({
  root: _objectSpread({}, props.error && props.touched ? _objectSpread({
    border: '2px solid #d8d8d8',
    borderBottom: '2.9px solid #d80000',
    '&.Mui-focused': {
      border: '2px solid #d80000'
    }
  }, props.styling) : _objectSpread({
    border: '2px solid #d8d8d8',
    borderBottom: props.validateBorderColor && props.value && !props.validateLoading ? !props.validateBorderCondition ? '2.9px solid green' : '2.9px solid #d80000' : '2.9px solid orange',
    '&.Mui-focused': {
      border: props.validateBorderColor && props.value && !props.validateLoading ? !props.validateBorderCondition ? '2px solid green' : '2px solid #d80000' : '2px solid black'
    },
    '&.MuiFilledInput-root': {
      fontSize: props.largerFont ? 22 : 15
    }
  }, props.styling)),
  underline: {
    '&&&:before': {
      borderBottom: 'none'
    },
    '&&:after': {
      borderBottom: 'none'
    }
  }
}));
const Input = props => {
  var _ref;
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
      styling,
      placeholder,
      touched,
      error,
      name,
      value,
      onChange,
      className,
      isFormIk,
      handleClickShowPassword,
      PasswordInput,
      inputProps,
      loading,
      EndAdornment,
      onEnter,
      validateBorderColor,
      validateBorderCondition,
      validateLoading,
      dataTooltip,
      tooltipStyles,
      onBlur: _onBlur,
      onFocus: _onFocus,
      largerFont,
      headerInputClass,
      formik
    } = props,
    rest = _objectWithoutProperties(props, _excluded);

  // const {ErrorMessage} = formik
  const onKeyEnter = e => {
    if (e.key === 'Enter') {
      onEnter(e);
    }
  };
  const [show, setShow] = (0, _react.useState)(false);
  const showTooltip = bool => {
    setShow(bool);
  };
  const classes = useStyles(props);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread({
      display: 'grid',
      marginBottom: 10
    }, styling),
    className: 'custom_input ' + className
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '1.8rem',
      maxWidth: styling === null || styling === void 0 ? void 0 : styling.width,
      whiteSpace: 'nowrap'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'relative'
    },
    className: "custom-text-field ".concat(!placeholder && 'no_placeholder', " ").concat(headerInputClass && 'header_input_class')
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, _extends({
    autoComplete: "off",
    InputProps: {
      classes
    },
    inputProps: _objectSpread({}, inputProps),
    label: t(placeholder),
    variant: "filled",
    id: name,
    name: name,
    onKeyPress: onKeyEnter
  }, rest, {
    value: ((_ref = value + '') === null || _ref === void 0 ? void 0 : _ref.trim().length) === 0 ? '' : value,
    onChange: onChange,
    onFocus: () => {
      showTooltip(true);
      if (_onFocus) {
        _onFocus();
      }
    },
    onBlur: e => {
      if (_onBlur) _onBlur(e);
      showTooltip(false);
    }
  })), loading ? /*#__PURE__*/_react.default.createElement(_material.CircularProgress, {
    size: 20,
    classes: {
      root: 'loading'
    }
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "end-adornment ".concat(error && 'opacity-3 ')
  }, EndAdornment())));
};
var _default = exports.default = Input;
Input.defaultProps = {
  isFormIk: true,
  inputProps: {},
  loading: false,
  EndAdornment: () => {}
};