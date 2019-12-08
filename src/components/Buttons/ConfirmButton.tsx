import Button from '@material-ui/core/Button';
import buttonStyle from 'assets/jss/material-dashboard-react/buttonStyle';
import * as cx from 'classnames';
import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

type ColorType =
  | 'blue' 
  | 'info'
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
    fullWidth: string;
    disabled: string;
    button: string;
  } & Partial<Record<ColorType, string>>;

  color?: ColorType;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  msg?: string;
  confirmButtonText?: string;
  action?: () => Promise<void>;
  open?: boolean;
}

interface ConfirmState {
  open: boolean;
}

class ConfirmButton extends React.Component<Props, ConfirmState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: false
    };

    if (!props.confirmButtonText ) {
      props.confirmButtonText = 'Confirm';
    }
  }

  setDialogOpen(open: boolean ): void {
    this.setState({
      open : open
    });
  }

  render() {
    const handleClickOpen = () => {
      this.setDialogOpen(true);
    };

    const close = () => {
      this.setDialogOpen(false);
    };

    const executeActionAndClose = async () => {

      await this.props.action();
      this.setDialogOpen(false);
    };

    const btnClasses = cx(this.props.color && this.props.classes[this.props.color], {
      [this.props.classes.round]: this.props.round,
      [this.props.classes.fullWidth]: this.props.fullWidth,
      [this.props.classes.disabled]: this.props.disabled,
    });
 
    return (
      <span >
      <Button  size="small" className={`${this.props.classes.button} ${btnClasses}`} onClick={handleClickOpen} >
        {this.props.children}
      </Button>
        <Dialog open={this.state.open} onClose={close} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Confirm</DialogTitle>
        <DialogContent>
          <div>
            {this.props.msg}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">
            Cancel
          </Button>
          <Button onClick={executeActionAndClose} color="primary">
            {this.props.confirmButtonText}
          </Button>
        </DialogActions>
      </Dialog>
      </span > 
    );
  }
}

export default withStyles(buttonStyle)(ConfirmButton);
