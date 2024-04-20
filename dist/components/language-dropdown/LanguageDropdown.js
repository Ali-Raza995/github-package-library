"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var Styles = _interopRequireWildcard(require("./LanguageDropdown.style"));
var _semanticUiReact = require("semantic-ui-react");
var _resuableCss = require("../../utils/resuable-css");
var _language = require("../../constants/language");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/* eslint-disable no-undef */

const LanguageDropdown = _ref => {
  let {
    language,
    handleLanguage,
    isHeader = false
  } = _ref;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  let language_text = _language.languageArray === null || _language.languageArray === void 0 ? void 0 : _language.languageArray.find(data => data.value === language);
  console.log('language', language);
  return /*#__PURE__*/_react.default.createElement(_semanticUiReact.Popup, {
    closable: true,
    preserve: true,
    open: isOpen,
    onClose: () => setIsOpen(false),
    onOpen: () => setIsOpen(true),
    popper: {
      id: 'popper-container',
      style: {
        zIndex: 2000
      }
    },
    on: "click",
    wide: true,
    position: "bottom left",
    style: {
      padding: 0,
      right: '2px',
      left: 'unset',
      backgroundColor: 'white'
    },
    trigger: /*#__PURE__*/_react.default.createElement(Styles.DropdownContainer, {
      onClick: () => setIsOpen(!isOpen)
    }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Icon, {
      name: "chevron down"
    }), /*#__PURE__*/_react.default.createElement(Styles.SelectedDropdown, null, /*#__PURE__*/_react.default.createElement(_resuableCss.H6, {
      className: "bold"
    }, language), !isHeader && /*#__PURE__*/_react.default.createElement(_resuableCss.H6, null, language_text === null || language_text === void 0 ? void 0 : language_text.text)))
  }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Popup.Content, null, /*#__PURE__*/_react.default.createElement(Styles.Dropdown, null, _language.languageArray === null || _language.languageArray === void 0 ? void 0 : _language.languageArray.map((data, i) => /*#__PURE__*/_react.default.createElement(Styles.DropdownList, {
    key: i,
    onClick: () => {
      setIsOpen(!isOpen);
      handleLanguage(data.value);
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "bold"
  }, data.value), /*#__PURE__*/_react.default.createElement("p", null, data.text))))));
};
var _default = exports.default = LanguageDropdown;