import Dashboard from '@material-ui/icons/Dashboard';
import { DashboardPage } from 'views/Dashboard/DashboardPage';

export const DEFAULT_ROUTE =  `/`;

export type Route = typeof dashboardRoutes[0];
const dashboardRoutes = [
  {
    path: `/`,
    sidebarName: 'Dashboard',
    icon: Dashboard,
    component: DashboardPage,
    show: 'yes'
  },
];

export default dashboardRoutes;
