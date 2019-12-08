import { StyleRulesCallback, Theme } from '@material-ui/core/styles';
import {
  defaultFont,
  infoColor,
} from 'assets/jss/material-dashboard-react';

const tableStyle: StyleRulesCallback<Theme, {}> = theme => ({
  infoTableHeader: {
    color: infoColor,
  },
  table: {
    marginBottom: '0',
    marginTop: '0',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'transparent',
    borderSpacing: '0',
    borderCollapse: 'collapse',
    sortDirection: 'asc',
    sortable: 'true',
  },
  tableHeadCell: {
    color: 'inherit',
    ...defaultFont,
    fontSize: '1em',
    width: '30em',
    textAlign: 'center',
  },
  tableCell: {
    ...defaultFont,
    lineHeight: '1.42857143',
    padding: '12px 8px',
    verticalAlign: 'middle',
    textAlign: 'center',
    sortDirection: 'asc',
    sortable: 'true',
    fontWeight: 'bolder',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '25px',
  },
  tableResponsive: {
    width: '100%',
    marginTop: theme.spacing.length * 3,
    overflowX: 'auto',
  },
  marginTop: {
    marginTop: '1px',
  },
  alignCenter: {
    textAlign: 'center',
  }
});

export default tableStyle;
