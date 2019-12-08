
import Menu from '@material-ui/icons/Menu';
import headerStyle from 'assets/jss/material-dashboard-react/headerStyle';
import * as cx from 'classnames';
import * as React from 'react';
import clsx from 'clsx';
import { Route } from 'routes/DashboardRoutes';
import HeaderLinks from './HeaderLinks';
import { RouteProps } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

type ColorType = 'blue' | 'info' | 'success' | 'warning' | 'danger';

interface Props {
  classes: {
    appBar: string;
    appBarShift: string;
    container: string;
    drawerButton: string;
  } & Partial<Record<ColorType, string>>;

  color?: ColorType;
  sidebarOpen: boolean;
  isSmallDisplay: boolean;

  handleDrawerToggle?: () => void;
  routes: Route[];
}

class Header extends React.Component<Props & RouteProps> {

  constructor(props: Props) {
    super(props);

    this.makeBrand = this.makeBrand.bind(this);
  }

  public render() {
    const { classes, color, handleDrawerToggle } = this.props;

    const appBarClasses = cx(classes.appBar, color && classes[color]);
    return (
      <AppBar className={clsx(appBarClasses, !this.props.isSmallDisplay && this.props.sidebarOpen && classes.appBarShift)}>
        <Toolbar className={classes.container}>
          <IconButton
              className={classes.drawerButton}
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
          <HeaderLinks/>
        </Toolbar>
      </AppBar>
    );
  }

  private makeBrand() {
    const { routes, location } = this.props;

    let name;

    routes.map((prop, key) => {

      return null;
    });

    return name;
  }
}

export default withStyles(headerStyle)(Header);
