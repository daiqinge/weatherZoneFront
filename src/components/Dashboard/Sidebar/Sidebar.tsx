
import sidebarStyle from 'assets/jss/material-dashboard-react/sidebarStyle';
import * as cx from 'classnames';
import * as React from 'react';
import { NavLink, RouteProps } from 'react-router-dom';
import { Route } from 'routes/DashboardRoutes';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface Props {
  classes: {
    list: string;
    whiteFont: string;
    itemLink: string;
    itemIcon: string;
    itemText: string;
    logo: string;
    img: string;
    drawerPaper: string;
    open: string;
    sidebarWrapper: string;
    background: string;
    logoLink: string;
    logoImage: string;
    item: string;
  };

  handleDrawerToggle: () => void;
  open: boolean;

  color: string;
  logo: string;
  logoText: string;
  logoLink: string;
  isSmallDisplay: boolean;
  routes: Route[];
}

const Sidebar: React.SFC<Props & RouteProps> = props => {
  const { classes, color, routes } = props;

  let links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {

        const listItemClasses = cx({
          [` ${classes[color]}`]: activeRoute(prop.path),
        });

        const whiteFontClasses = cx({
          [` ${classes.whiteFont}`]: activeRoute(prop.path),
        });

        return (prop.show === 'no' ? null :
          <NavLink
            to={prop.path}
            className={classes.item}
            activeClassName="active"
            key={key}
          >
              <ListItem button className={classes.itemLink + listItemClasses}>
                {prop.icon && (
                  <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                    <prop.icon />
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={prop.sidebarName}
                  className={classes.itemText + whiteFontClasses}
                  disableTypography={true}
                />
              </ListItem> 
          </NavLink>
        );
      })}
    </List>
  );

  const menuContent = (
    <div>
      <div>
        <Button href={props.logoLink} className={classes.logo}>
        <img src={props.logo} alt="logo"/>
        </Button>
      </div>
      <div className={classes.sidebarWrapper}>
        {links}
      </div>
    </div>
  );

  return ( 
    <div>
      <Hidden smDown>
      <Drawer
        variant="persistent"
        anchor="left"
        open={props.open}
        children={menuContent}
        classes={{
          paper: classes.drawerPaper,
      }}
      />
      </Hidden>
      <Hidden mdUp>
      <Drawer
        variant="temporary"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        children={menuContent}
      />
      </Hidden>
    </div>
  );
  
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName: string) {
    let pathname = window.location.pathname;
    let segLength = routeName.split('/').length;
    let prePath = (segLength > 2 && (!routeName.includes('dashboard'))) ? routeName.substring(0, routeName.lastIndexOf('/')) : routeName;
    return pathname.indexOf(prePath) > -1;
  }
};

export default withStyles(sidebarStyle)(Sidebar);
