import logo from 'assets/img/white_logo.png';
import appStyle from 'assets/jss/material-dashboard-react/appStyle';
import { 
  Header, 
  Sidebar } from 'components';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import * as React from 'react';
import clsx from 'clsx';
import { Route, RouteProps, Switch } from 'react-router-dom';
import dashboardRoutes from 'routes/DashboardRoutes';
import { withStyles } from '@material-ui/core/styles';

interface DashboardProps {
  classes: {
    content: string;
    container: string;
    map: string;
    mainPanel: string;
    mainPanelShift: string;
    wrapper: string;
  };
}

interface DashboardState {
  sidebarOpen: boolean;
  isSmallDisplay: boolean;
}

class Dashboard extends React.Component<DashboardProps & RouteProps, DashboardState> {
  private mainPanel: HTMLDivElement | null = null;

  constructor(props: DashboardProps) {
    super(props);

    this.state = { sidebarOpen: false,
                   isSmallDisplay: false };

    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.getRoute = this.getRoute.bind(this);
  }

  switchRoutes = (
    <Switch>
      {dashboardRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  );

  componentDidMount() {
    if (!this.mainPanel) {
      throw new Error('mainPanel ref missing');
    }

    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  componentDidUpdate() {
    if (this.mainPanel) {
      this.mainPanel.scrollTop = 0;
    }
  }

  resize() {

    const isSmallDisplay = window.innerWidth <= 600;

    this.setState({isSmallDisplay: isSmallDisplay});

    if (!isSmallDisplay) {
      this.setState({sidebarOpen: true});
    }

    if (this.state.sidebarOpen && isSmallDisplay) {
      this.setState({sidebarOpen: false});
    }
  }

  render() {
    const { classes, ...rest } = this.props;

    return (
      // For big displays: if the sidebar is open, display main panel shifted by the width of the sidebar.
      <div className={clsx(classes.wrapper, !this.state.isSmallDisplay && this.state.sidebarOpen && classes.mainPanelShift)}>
        <Sidebar
          routes={dashboardRoutes}
          logo={logo}
          logoText="TestStock"
          logoLink="https://www.weatherzone.com.au/"
          isSmallDisplay={this.state.isSmallDisplay}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.sidebarOpen}
          color="blue"
          {...rest}
        />
        <div className={clsx(classes.mainPanel)} ref={ref => (this.mainPanel = ref)}>
          <Header 
            sidebarOpen={this.state.sidebarOpen}
            isSmallDisplay={this.state.isSmallDisplay}
            routes={dashboardRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {/*
              On the /maps route we want the map to be on full screen
              this is not possible if the content and conatiner classes are present
              because they have some paddings which would make the map smaller
            */}
          {this.getRoute() ? (

            <div className={classes.content}>
              <div className={classes.container}>{this.switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{this.switchRoutes}</div>
          )}
          {this.getRoute()}
        </div>
      </div>
    );
  }

  private handleDrawerToggle() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  private getRoute() {
    const { location } = this.props;

    return location && location.pathname !== '/maps';
  }
}

export default withStyles(appStyle)(Dashboard);
