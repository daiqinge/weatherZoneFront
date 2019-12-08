import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import customTextFieldStyle from 'assets/jss/material-dashboard-react/customTextFieldStyle';
import * as cx from 'classnames';
import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

interface Props {
  classes: {
    labelRootError: string;
    labelRootSuccess: string;
    marginTop: string;
    formControl: string;
    disabled: string;
    feedback: string;
    textField: string;
  };

  labelText?: React.ReactNode;
  name?: string;
  value?: string;
  id?: string;
  formControlProps?: FormControlProps;
  error?: boolean;
  success?: boolean;
}

const CustomTextField: React.SFC<Props> = props => {
  const {
    classes,
    formControlProps,
    labelText,
    name,
    value,
    error,
    success,
  } = props;

  const [valueT, setValueT] = React.useState<string>(value);

  const formControlClasses = cx(
    formControlProps && formControlProps.className,
    classes.formControl,
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueT(event.target.value);
  };
  console.log(valueT);
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      <TextField
        className={classes.textField}
        name={name}
        value={value}
        label={labelText}
        onChange={handleChange}
      />
      {error ? (
        <Clear className={`${classes.feedback} ${classes.labelRootError}`} />
      ) : success ? (
        <Check className={`${classes.feedback} ${classes.labelRootSuccess}`} />
      ) : null}
    </FormControl>
  );
};

export default withStyles(customTextFieldStyle)(CustomTextField);
