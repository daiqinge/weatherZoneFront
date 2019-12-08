
import headerLinksStyle from 'assets/jss/material-dashboard-react/headerLinksStyle';
import * as React from 'react';
import { Manager } from 'react-popper';
import { withStyles } from '@material-ui/core/styles';
import {
  CustomSelect,
} from 'components';

interface HeaderLinkProps {
  classes: {
    margin: string;
    search: string;
    searchButton: string;
    searchIcon: string;
    buttonLink: string;
    notifications: string;
    links: string;
    linkText: string;
    popperResponsive: string;
    dropdown: string;
    dropdownItem: string;
    popperClose: string;
    userAction: string;
    accountPanel: string;
  };

}

interface HeaderLinkState {
  open: boolean;
  selectedVal: string;
}

const typeOpt = [
  ['None', 'Please Select ...'],
  ['Canberra', 'Canberra'],
  ['Darwin', 'Darwin'],
  ['Brisbane', 'Brisbane'],
  ['Hobart', 'Hobart'],
  ['Adelaide', 'Adelaide'],
  ['Melbourne', 'Melbourne'],
  ['Perth', 'Perth'],
  ['Sydney', 'Sydney']
];

class HeaderLinks extends React.Component<HeaderLinkProps, HeaderLinkState> {

  constructor(props: HeaderLinkProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {

    return (
      <div>
        <Manager style={{ display: 'inline-block' }}>
          <CustomSelect
            initialSelected={'None'}
            options={typeOpt}
            formControlProps={{
              fullWidth: true,
            }}
          />
        </Manager>
      </div>
    );
  }

  private handleClick() {
    this.setState({ open: !this.state.open });
  }
  
}

export default withStyles(headerLinksStyle)(HeaderLinks);
