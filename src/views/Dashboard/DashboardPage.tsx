import { TableParameters, TableColumn } from 'components/Crud/Table/BasicTable';
import { EntityList } from 'components/Crud/EntityList';

export class DashboardPage extends EntityList {

  createColumns(): TableColumn[] {
    return [
      { name: 'precipiPercent', 
        label: 'Precipitation Probability' , 
        width: 150, 
        align: 'center'
      },
      {
        name: 'temperature',
        label: 'Temperature',
        width: 50,
        align: 'center'
      },
      {
        name: 'windSpeed',
        label: 'Wind Speed',
        width: 50,
        align: 'center'
      },
      {
        name: 'windDirection',
        label: 'Wind Direction',
        width: 50,
        align: 'center'
      },
      {
        name: 'dateTime',
        label: 'Date',
        width: 50,
        align: 'center'
      },
    ];
  }

  createParameters(): TableParameters {
    return {
      apiUrl:  `http://localhost:8092//weatherController/getList`,
      title: 'Message List',
      filterProps: {
        searchHolder: 'label',
        filterEnable: true,
      },
      isDashBoard: true,
      entityName: 'dashboard' 
    };
  }
}