import React, { useState } from 'react';
import './input.css';
// import { ErrorMessage } from 'formik';
import { CircularProgress, TextField } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
// import { InputTooltip } from '../../components/input-tooltip/input-tooltip';
import { useTranslation } from 'react-i18next';

// Here validate border condition is added because of user management page where we are validating the user exist in the database or not while adding the subuser.
const useStyles = makeStyles((props) =>
  createStyles({
    root: {
      ...(props.error && props.touched
        ? {
            border: '2px solid #d8d8d8',
            borderBottom: '2.9px solid #d80000',
            '&.Mui-focused': {
              border: '2px solid #d80000',
            },
            ...props.styling,
          }
        : {
            border: '2px solid #d8d8d8',
            borderBottom:
              props.validateBorderColor && props.value && !props.validateLoading
                ? !props.validateBorderCondition
                  ? '2.9px solid green'
                  : '2.9px solid #d80000'
                : '2.9px solid orange',
            '&.Mui-focused': {
              border:
                props.validateBorderColor && props.value && !props.validateLoading
                  ? !props.validateBorderCondition
                    ? '2px solid green'
                    : '2px solid #d80000'
                  : '2px solid black',
            },
            '&.MuiFilledInput-root': {
              fontSize: props.largerFont ? 22 : 15,
            },
            ...props.styling,
          }),
    },
    underline: {
      '&&&:before': {
        borderBottom: 'none',
      },
      '&&:after': {
        borderBottom: 'none',
      },
    },
  }),
);

const Input = (props) => {
  const { t } = useTranslation();
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
    onBlur,
    onFocus,
    largerFont,
    headerInputClass,
    formik,
    ...rest
  } = props;

  // const {ErrorMessage} = formik
  const onKeyEnter = (e) => {
    if (e.key === 'Enter') {
      onEnter(e);
    }
  };
  const [show, setShow] = useState(false);

  const showTooltip = (bool) => {
    setShow(bool);
  };

  const classes = useStyles(props);

  return (
    <div style={{ display: 'grid', marginBottom: 10, ...styling }} className={'custom_input ' + className}>
      <div
        style={{
          height: '1.8rem',
          maxWidth: styling?.width,
          whiteSpace: 'nowrap',
        }}
      >
        {/* {isFormIk ? (
          <ErrorMessage name={name} render={(msg) => <span className="error_messageSty">{t(msg)}</span>} />
        ) : (
          <>{error && <span className="error_messageSty">{t(error) || 'Wrong format'}</span>}</>
        )} */}
      </div>

      <div
        style={{ position: 'relative' }}
        className={`custom-text-field ${!placeholder && 'no_placeholder'} ${headerInputClass && 'header_input_class'}`}
      >
        <TextField
          autoComplete="off"
          InputProps={{
            classes,
          }}
          inputProps={{
            ...inputProps,
          }}
          label={t(placeholder)}
          variant="filled"
          id={name}
          name={name}
          onKeyPress={onKeyEnter}
          {...rest}
          value={(value + '')?.trim().length === 0 ? '' : value}
          onChange={onChange}
          onFocus={() => {
            showTooltip(true);
            if (onFocus) {
              onFocus();
            }
          }}
          onBlur={(e) => {
            if (onBlur) onBlur(e);
            showTooltip(false);
          }}
        />
        {loading ? (
          <CircularProgress size={20} classes={{ root: 'loading' }} />
        ) : (
          <div className={`end-adornment ${error && 'opacity-3 '}`}>{EndAdornment()}</div>
        )}
        {/* {show && <InputTooltip tooltipStyles={tooltipStyles} dataTooltip={dataTooltip} />} */}
      </div>
    </div>
  );
};

export default Input;

Input.defaultProps = {
  isFormIk: true,
  inputProps: {},
  loading: false,
  EndAdornment: () => {},
};
