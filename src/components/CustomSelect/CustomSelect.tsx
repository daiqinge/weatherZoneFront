import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import customSelectStyle from 'assets/jss/material-dashboard-react/customSelectStyle';
import * as cx from 'classnames';
import * as React from 'react';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

interface Props {
  classes: {
    labelRootError: string;
    labelRootSuccess: string;
    marginTop: string;
    formControl: string;
    labelRoot: string;
    disabled: string;
    feedback: string;
  };

  labelProps?: object;
  name?: string;
  value?: string;
  inputProps?: object;
  formControlProps?: FormControlProps;
  error?: boolean;
  success?: boolean;
  options?: string[][];
  initialSelected: string;
  handleChange?: (value: string) => Promise<void>;
}

const CustomSelect: React.SFC<Props> = props => {
  const {
    classes,
    formControlProps,
    initialSelected,
    options,
  } = props;

  const formControlClasses = cx(
    formControlProps && formControlProps.className,
    classes.formControl,
  );

  const onhandleChange = (event: React.ChangeEvent<{ value: string}>) => { 
    // handleChange(event.target.value);
  };
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      <Select
        name={name}
        value={initialSelected}
        onChange={onhandleChange}
      >
            {
              options &&
              options.map((rowProp) => {
                let val = rowProp[0];
                if (val === `None`) {
                  return <option key={rowProp[0]} value={rowProp[0]} disabled>{rowProp[1]}</option>;
                } else {
                  return <option key={rowProp[0]} value={rowProp[0]} >{rowProp[1]}</option>;
                }
              })
            }
      </Select>
    </FormControl>
  );
};

export default withStyles(customSelectStyle)(CustomSelect);
