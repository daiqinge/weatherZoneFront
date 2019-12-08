
// tslint:disable:max-line-length

import { StyleRules } from '@material-ui/core/styles';
import {
  blueColor,
} from 'assets/jss/material-dashboard-react';

const buttonStyle: StyleRules = {
  button: {
    color: '#FFFFFF',
    variant: 'inline',
    textTransform: 'none',
    marginRight: '2px',
    marginLeft: '2px',
    cursor: 'pointer',
  },
  blue: {
    backgroundColor: blueColor,
    boxShadow:
      '0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)',
    '&:hover': {
      backgroundColor: blueColor,
      boxShadow:
        '0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)',
    },
  },
  round: {
    borderRadius: '30px',
  },
  disabled: {
    opacity: 0.65,
    pointerEvents: 'none',
  }
};

export default buttonStyle;
