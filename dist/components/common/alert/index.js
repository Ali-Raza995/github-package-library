"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActionAlerts;
var _react = _interopRequireDefault(require("react"));
var _Alert = _interopRequireDefault(require("@mui/material/Alert"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useStyles = {
  root: {
    width: '100%',
    alignItems: 'center'
  }
};
function ActionAlerts(_ref) {
  let {
    open,
    handleClose,
    text,
    severity,
    link
  } = _ref;
  // const classes = useStyles();

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, open && /*#__PURE__*/_react.default.createElement(_Alert.default, {
    className: useStyles.root,
    color: severity === 'error' ? 'error' : 'success',
    severity: severity,
    onClose: handleClose
  }, text, " ", link));
}