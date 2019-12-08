import Grid, { GridProps } from '@material-ui/core/Grid';
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

interface Props {
  classes: {
    grid: string;
  };
}

const ItemGrid: React.SFC<
  Props & Pick<GridProps, Exclude<keyof GridProps, keyof Props>>
> = props => {
  const { classes, children, ...rest } = props;

  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
};

export default withStyles({
  grid: {
    padding: '0 5px !important',
  },
})(ItemGrid);
