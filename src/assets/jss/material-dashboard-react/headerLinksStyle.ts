import { StyleRulesCallback, Theme } from '@material-ui/core/styles';
import {
  defaultFont,
  infoBoxShadow,
  blueColor,
} from 'assets/jss/material-dashboard-react';

const userMenuWidth = 280;

const headerLinksStyle: StyleRulesCallback<Theme, {}> = theme => ({
  popperClose: {
    pointerEvents: 'none',
  },
  search: {
    '& > div': {
      marginTop: '0',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '10px 15px',
      float: 'none !important' as 'none',
      paddingTop: '1px',
      paddingBottom: '1px',
      padding: '10px 15px',
      width: 'auto',
      marginTop: '10px',
    },
  },
  linkText: {
    zIndex: 4,
    ...defaultFont,
    fontSize: '14px',
  },
  buttonLink: {
    width: userMenuWidth,
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    flexFlow: 'row wrap',
    paddingLeft: '25px',
    textTransform: 'none',
  },
  searchButton: {
    [theme.breakpoints.down('sm')]: {
      top: '-50px !important',
      marginRight: '22px',
      float: 'right',
    },
  },
  margin: {
    zIndex: 4,
    margin: '0',
  },
  searchIcon: {
    width: '17px',
    zIndex: 4,
  },
  links: {
    width: '20px',
    height: '20px',
    zIndex: 4,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      width: '30px',
      height: '30px',
      color: '#a9afbb',
      marginRight: '15px',
    },
  },
  notifications: {
    zIndex: 4,
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '5px',
      border: '1px solid #FFF',
      right: '10px',
      fontSize: '9px',
      color: '#FFFFFF',
      minWidth: '16px',
      height: '16px',
      borderRadius: '10px',
      textAlign: 'center',
      lineHeight: '16px',
      verticalAlign: 'middle',
      display: 'block',
    },
    [theme.breakpoints.down('sm')]: {
      ...defaultFont,
      fontSize: '14px',
      marginRight: '8px',
    },
  },
  dropdown: {
    borderRadius: '3px',
    border: '0',
    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
    top: '100%',
    zIndex: 1000,
    minWidth: '200px',
    margin: '10px 0 0',
    fontSize: '14px',
    textAlign: 'center',
    listStyle: 'none',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
  },
  popperResponsive: {
    minWidth: userMenuWidth,
    [theme.breakpoints.down('sm')]: {
      zIndex: 1640,
      position: 'static',
      float: 'none',
      width: 'auto',
      marginTop: '0',
      backgroundColor: 'transparent',
      border: '0',
      boxShadow: 'none',
      color: 'black',
    },
  },
  userAction: {
    display: 'flex',
    justifyContent: 'space-between',
    flexFlow: 'row wrap',
  },
  accountPanel: {
    paddingTop: 8,
    backgroundColor: blueColor,
    color: '#fff',
    minHeight: 130,
  },
  dropdownItem: {
    ...defaultFont,
    fontSize: '13px',
    padding: '8px 20px',
    margin: '8px 5px',
    borderRadius: '5px',
    transition: 'all 150ms linear',
    display: 'block',
    clear: 'both',
    fontWeight: 400,
    lineHeight: '1.42857143',
    color: '#333',
    whiteSpace: 'normal',
    '&:hover': {
      backgroundColor: blueColor,
      color: '#FFFFFF',
      ...infoBoxShadow,
    },
  },
});

export default headerLinksStyle;
