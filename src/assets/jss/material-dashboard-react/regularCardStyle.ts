import { StyleRules } from '@material-ui/core/styles';
import {
  blueCardHeader,
  card,
  cardHeader,
  defaultFont,
} from 'assets/jss/material-dashboard-react';

const regularCardStyle: StyleRules = {
  card,
  cardOutline: {
    display: 'flex', 
    justifyContent: 'center',
  },
  cardPlain: {
    background: 'transparent',
    boxShadow: 'none',
  },
  cardHeader: {
    width: '180px',
    ...cardHeader,
    ...defaultFont,
  },
  cardIcon: {
    width: '40px',
    height: '36px',
    fill: '#fff',
  },
  cardPlainHeader: {
    marginLeft: 0,
    marginRight: 0,
  },
  blueCardHeader,
  cardTitle: {
    color: '#FFFFFF',
    marginTop: '20',
    marginBottom: '5px',
    ...defaultFont,
    fontSize: '1.125em',
    textAlign: 'center',
  },
  cardActions: {
    padding: '14px',
    marginBottom: '20px',
    marginRight: '17px',
    display: 'block',
    height: 'auto',
    textAlign: 'right',
  },
};

export default regularCardStyle;
