import React from 'react';
import './styles.css';

const AlertBox = ({ message, heading }) => {
  return (
    <React.Fragment>
      <div style={{ fontSize: '14px' }}>
        <h4>{heading}</h4>
        <p>{message}</p>
      </div>
    </React.Fragment>
  );
};
export { AlertBox };
