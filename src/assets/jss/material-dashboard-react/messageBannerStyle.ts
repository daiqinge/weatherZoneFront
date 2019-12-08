import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

const messageBannerStyle: StyleRulesCallback<Theme, {}> = theme => ({
  success: {
    backgroundColor: '#4CAF50',
  },
  error: {
    backgroundColor: '#e91e63',
  },
  content:  {
    minWidth: 400,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexFlow: 'row wrap',
    fontSize: '1.05rem',
  },
  closeDialogIcon:  {
    alignSelf: 'end'
  },
});

export default messageBannerStyle;
