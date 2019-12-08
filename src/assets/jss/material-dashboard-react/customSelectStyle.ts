import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

const customSelectStyle: StyleRulesCallback<Theme, {}> = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        color: '#FFFFFF',
    },
    formControl: {
        margin: theme.spacing.length,
        marginRight: 10,
        width: 200,
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
});
export default customSelectStyle;
