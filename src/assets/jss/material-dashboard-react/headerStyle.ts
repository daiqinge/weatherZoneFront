import { StyleRulesCallback, Theme } from '@material-ui/core/styles';
import {
  container,
  defaultBoxShadow,
  blueColor,

} from 'assets/jss/material-dashboard-react';

const drawerWidth = 260; // TODO move

const headerStyle: StyleRulesCallback<Theme, {}> = theme => ({
  appBar: {
    backgroundColor: blueColor,
    boxShadow: 'none',
    borderBottom: '0',
    marginBottom: '0',
    width: '100%',
    paddingTop: '1px',
    zIndex: 1029,
    color: '#FFFFFF',
    Font: '28px',
    border: '0',
    borderRadius: '0px',
    padding: '1px 0',
    transition: 'all 150ms ease 0s',
    minHeight: '56px',
    display: 'block',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  container: {
    ...container,
    minHeight: '20px',
    marginRight: '12px', // To avoid colliding with scrollbar on some screen resolutionss
    display: 'flex',
    justifyContent: 'space-between',
    flexFlow: 'row wrap'
  },
  drawerButton: {
    alignSelf: 'start',
  },
  blue: {
    backgroundColor: blueColor,
    color: '#FFFFFF',
    ...defaultBoxShadow,
  },
});

export default headerStyle;
