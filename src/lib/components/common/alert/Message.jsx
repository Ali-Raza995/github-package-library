import React from 'react';
import _get from 'lodash/get';
import { toast } from 'react-toastify';
import { AlertBox } from './AlertBox';
import './styles.css';
import { Slide } from 'react-toastify';

export class Message {
  static error(message, heading, position, e) {
    console.log('dsd')
    toast(
      <AlertBox
        message={
          !message
            ? _get(e, 'response.data.error', 'There has been an error in the options you submitted.')
            : message || 'There has been an error in the options you submitted.'
        }
        heading={heading || 'Error in submission'}
      />,
      {
        className: 'error',
        transition: Slide,
        position: position || 'top-right',
      },
    );
  }
  static success(message, heading, position) {
    toast(
      <AlertBox
        message={message || 'Your changes have been saved successfully.'}
        heading={heading || 'Great Success!'}
      />,
      {
        className: 'success',
        transition: Slide,
        position: position || 'top-right',
      },
    );
  }
}
