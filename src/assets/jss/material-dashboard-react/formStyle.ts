import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

const formStyle: StyleRulesCallback<Theme, {}> = theme => ({
  grid: {
    padding: '15px', 
    marginTop: '10px',
    marginBottom: '10px'
  },
  label: {
    color: '#000000', 
    padding: '15px', 
    textAlign: 'left', 
    fontSize: '1rem'
  },
  backBtn: {
    textTransform: 'none', 
    marginRight: '2px'
  },
  hidden : {
    display: 'none', 
  }
});

export default formStyle;
