
import { StyleRules } from '@material-ui/core/styles';
import { defaultFont, blueColor, successColor } from 'assets/jss/material-dashboard-react';

const customInputStyle: StyleRules = {
  disabled: {
    '&:before': {
      backgroundColor: 'transparent !important',
    },
  },
  underline: {
    '&:hover:not($disabled):before,&:before': {
      backgroundColor: '#D2D2D2',
      height: '0px !important',
    },
    '&:after': {
      backgroundColor: blueColor,
    },
  },
  underlineSuccess: {
    '&:after': {
      backgroundColor: successColor,
    },
  },
  labelRoot: {
    ...defaultFont,
    color: '#AAAAAA',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '1.42857',
  },
  labelRootSuccess: {
    color: successColor,
  },
  feedback: {
    position: 'absolute',
    top: '1px',
    right: '0',
    zIndex: 2,
    display: 'block',
    width: '24px',
    textAlign: 'center',
    pointerEvents: 'none',
  },
  marginTop: {
    marginTop: '1px',
  },
  formControl: {
    paddingBottom: '0px',
    margin: '0px 0 0 5px',
    position: 'relative',
  },
};

export default customInputStyle;
