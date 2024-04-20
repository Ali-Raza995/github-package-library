"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pStyles = exports.h6Styles = exports.h5Styles = exports.h4Styles = exports.h3Styles = exports.h2Styles = exports.h1Styles = exports.dynamicStyles = exports.SMALL = exports.P = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const dynamicStyles = (resolutions, apiKey, cssName, apiKey2, cssName2) => {
  return resolutions === null || resolutions === void 0 ? void 0 : resolutions.map(resolution => {
    if (apiKey2) {
      if (resolution[apiKey] !== undefined && resolution[apiKey2] !== undefined) {
        return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n          @media only screen and (max-width: ", "px) {\n            ", ": ", ";\n            ", ": ", ";\n          }\n        "])), resolution['width'], cssName, resolution[apiKey], cssName2, resolution[apiKey2]);
      }
    } else if (resolution[apiKey] !== undefined) {
      return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        @media only screen and (max-width: ", "px) {\n          ", ": ", ";\n        }\n      "])), resolution['width'], cssName, resolution[apiKey]);
    }
  });
};
exports.dynamicStyles = dynamicStyles;
const h1Styles = resolutions => {
  return resolutions === null || resolutions === void 0 ? void 0 : resolutions.map(resolution => {
    const {
      width,
      h1
    } = resolution;
    if (h1 !== undefined) {
      return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        @media only screen and (max-width: ", "px) {\n          font-size: ", ";\n        }\n      "])), width, h1);
    }
  });
};
exports.h1Styles = h1Styles;
const h2Styles = resolutions => {
  return resolutions === null || resolutions === void 0 ? void 0 : resolutions.map(resolution => {
    const {
      width,
      h2
    } = resolution;
    if (h2 !== undefined) {
      return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        @media only screen and (max-width: ", "px) {\n          font-size: ", ";\n        }\n      "])), width, h2);
    }
  });
};
exports.h2Styles = h2Styles;
const h3Styles = resolutions => {
  return resolutions === null || resolutions === void 0 ? void 0 : resolutions.map(resolution => {
    const {
      width,
      h3
    } = resolution;
    if (h3 !== undefined) {
      return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        @media only screen and (max-width: ", "px) {\n          font-size: ", ";\n        }\n      "])), width, h3);
    }
  });
};
exports.h3Styles = h3Styles;
const h4Styles = resolutions => {
  return resolutions === null || resolutions === void 0 ? void 0 : resolutions.map(resolution => {
    const {
      width,
      h4
    } = resolution;
    if (h4 !== undefined) {
      return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        @media only screen and (max-width: ", "px) {\n          font-size: ", ";\n        }\n      "])), width, h4);
    }
  });
};
exports.h4Styles = h4Styles;
const h5Styles = resolutions => {
  return resolutions === null || resolutions === void 0 ? void 0 : resolutions.map(resolution => {
    const {
      width,
      h5
    } = resolution;
    if (h5 !== undefined) {
      return (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        @media only screen and (max-width: ", "px) {\n          font-size: ", ";\n        }\n      "])), width, h5);
    }
  });
};
exports.h5Styles = h5Styles;
const h6Styles = resolutions => {
  return resolutions === null || resolutions === void 0 ? void 0 : resolutions.map(resolution => {
    const {
      width,
      h6
    } = resolution;
    if (h6 !== undefined) {
      return (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        @media only screen and (max-width: ", "px) {\n          font-size: ", ";\n        }\n      "])), width, h6);
    }
  });
};
exports.h6Styles = h6Styles;
const pStyles = resolutions => {
  return resolutions === null || resolutions === void 0 ? void 0 : resolutions.map(resolution => {
    const {
      width,
      p
    } = resolution;
    if (p !== undefined) {
      return (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        @media only screen and (max-width: ", "px) {\n          font-size: ", ";\n        }\n      "])), width, p);
    }
  });
};
exports.pStyles = pStyles;
const P = exports.P = _styledComponents.default.p(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  ", ";\n"])), props => {
  var _props$theme$default;
  return (_props$theme$default = props.theme.default) === null || _props$theme$default === void 0 ? void 0 : _props$theme$default.p;
}, props => pStyles(props.theme.resolutions));
const SMALL = exports.SMALL = _styledComponents.default.small(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  ", ";\n"])), props => {
  var _props$theme$default2;
  return (_props$theme$default2 = props.theme.default) === null || _props$theme$default2 === void 0 ? void 0 : _props$theme$default2.small;
}, props => pStyles(props.theme.resolutions));
const H1 = exports.H1 = _styledComponents.default.h1(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  ", ";\n"])), props => {
  var _props$theme$default3;
  return (_props$theme$default3 = props.theme.default) === null || _props$theme$default3 === void 0 ? void 0 : _props$theme$default3.h1;
}, props => h1Styles(props.theme.resolutions));
const H2 = exports.H2 = _styledComponents.default.h2(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  ", ";\n"])), props => {
  var _props$theme$default4;
  return (_props$theme$default4 = props.theme.default) === null || _props$theme$default4 === void 0 ? void 0 : _props$theme$default4.h2;
}, props => h2Styles(props.theme.resolutions));
const H3 = exports.H3 = _styledComponents.default.h3(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  ", ";\n"])), props => {
  var _props$theme$default5;
  return (_props$theme$default5 = props.theme.default) === null || _props$theme$default5 === void 0 ? void 0 : _props$theme$default5.h3;
}, props => h3Styles(props.theme.resolutions));
const H4 = exports.H4 = _styledComponents.default.h4(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  ", ";\n"])), props => {
  var _props$theme$default6;
  return (_props$theme$default6 = props.theme.default) === null || _props$theme$default6 === void 0 ? void 0 : _props$theme$default6.h4;
}, props => h4Styles(props.theme.resolutions));
const H5 = exports.H5 = _styledComponents.default.h5(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  ", ";\n"])), props => {
  var _props$theme$default7;
  return (_props$theme$default7 = props.theme.default) === null || _props$theme$default7 === void 0 ? void 0 : _props$theme$default7.h5;
}, props => h5Styles(props.theme.resolutions));
const H6 = exports.H6 = _styledComponents.default.h6(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  ", ";\n"])), props => {
  var _props$theme$default8;
  return (_props$theme$default8 = props.theme.default) === null || _props$theme$default8 === void 0 ? void 0 : _props$theme$default8.h6;
}, props => h6Styles(props.theme.resolutions));