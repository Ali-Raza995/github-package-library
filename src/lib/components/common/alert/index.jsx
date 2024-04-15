import React from 'react';
import Alert from '@mui/material/Alert';

const useStyles = {
  root: {
    width: '100%',
    alignItems: 'center',
  },
};

export default function ActionAlerts({ open, handleClose, text, severity, link }) {
  // const classes = useStyles();

  return (
    <>
      {open && (
        <Alert
          className={useStyles.root}
          color={severity === 'error' ? 'error' : 'success'}
          severity={severity}
          onClose={handleClose}
        >
          {text} {link}
        </Alert>
      )}
    </>
  );
}
