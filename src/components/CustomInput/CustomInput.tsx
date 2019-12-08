import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import customInputStyle from 'assets/jss/material-dashboard-react/customInputStyle';
import * as cx from 'classnames';
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

interface Props {
  classes: {
    labelRootError: string;
    labelRootSuccess: string;
    underlineError: string;
    underlineSuccess: string;
    underline: string;
    marginTop: string;
    formControl: string;
    labelRoot: string;
    disabled: string;
    feedback: string;
  };

  placeholder?: string;
  labelProps?: object;
  id?: string;
  value?: string;
  style?: any;
  inputProps?: object;
  formControlProps?: FormControlProps;
  error?: boolean;
  success?: boolean;
  handleChange?: (value: string) => Promise<void>;
}

const CustomInput: React.SFC<Props> = props => {
  const {
    classes,
    formControlProps,
    placeholder,
    id,
    value,
    style,
    inputProps,
    error,
    success,
    handleChange,
  } = props;

  const formControlClasses = cx(
    formControlProps && formControlProps.className,
    classes.formControl,
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleChange(event.target.value);
  };

  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      <TextField
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        style={style}
        variant="outlined"
        {...inputProps}
      />
      {error ? (
        <Clear className={`${classes.feedback} ${classes.labelRootError}`} />
      ) : success ? (
        <Check className={`${classes.feedback} ${classes.labelRootSuccess}`} />
      ) : null}
    </FormControl>
  );
};

export default withStyles(customInputStyle)(CustomInput);
