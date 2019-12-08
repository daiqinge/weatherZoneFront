
import { StyleRules } from '@material-ui/core/styles';
import { successColor } from 'assets/jss/material-dashboard-react';

const customTextFieldStyle: StyleRules = {
  textField: {
    variant: 'outlined',
    margin: 'normal',
  },
  disabled: {
    '&:before': {
      backgroundColor: 'transparent !important',
    },
  },
  labelRootSuccess: {
    color: successColor,
  },
  feedback: {
    position: 'absolute',
    top: '18px',
    right: '0',
    zIndex: 2,
    display: 'block',
    width: '24px',
    height: '24px',
    textAlign: 'center',
    pointerEvents: 'none',
  },
  marginTop: {
    marginTop: '1px',
  },
  formControl: {
    paddingBottom: '0',
    margin: '1px 0 0 0',
    position: 'relative',
  },
};

export default customTextFieldStyle;
