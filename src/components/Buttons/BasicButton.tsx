
import Button, { ButtonProps } from '@material-ui/core/Button';
import buttonStyle from 'assets/jss/material-dashboard-react/buttonStyle';
import * as cx from 'classnames';
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

type ColorType =
  | 'blue' 
  | 'info'
  | 'yellow'
  | 'success'
  | 'warning'
  | 'danger'
  | 'rose'
  | 'white'
  | 'simple'
  | 'transparent';

interface Props {
  classes: {
    round: string;
    disabled: string;
    button: string;
  } & Partial<Record<ColorType, string>>;

  color?: ColorType;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

const BasicButton: React.SFC<
  Props & Pick<ButtonProps, Exclude<keyof ButtonProps, keyof Props>>
> = props => {
  const {
    classes,
    color,
    round,
    children,
    fullWidth,
    disabled,
    ...rest
  } = props;

  const btnClasses = cx(color && classes[color], {
    [classes.round]: round,
    [classes.disabled]: disabled,
  });

  return (
    <Button {...rest} className={`${classes.button}  ${btnClasses}`}>
      {children}
    </Button>
  );
};

export default withStyles(buttonStyle)(BasicButton);
