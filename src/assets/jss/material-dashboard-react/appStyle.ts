
import {
  container,
  drawerWidth,
  transition,
} from 'assets/jss/material-dashboard-react';
import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

const appStyle: StyleRulesCallback<Theme, {}> = theme => ({
  wrapper: {
    position: 'relative',
    top: '0',
    height: '100vh',
  },
  mainPanelShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  mainPanel: {
    overflow: 'auto',
    position: 'relative',
    float: 'right',
    ...transition,
    maxHeight: '100%',
    width: '100%',
    overflowScrolling: 'touch',
  },
  content: {
    marginTop: '70px',
    padding: '5px 5px',
    minHeight: 'calc(100% - 123px)',
  },
  container,
  map: {
    marginTop: '40px',
  },
});

export default appStyle;
