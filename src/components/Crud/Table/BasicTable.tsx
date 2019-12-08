import tableStyle from 'assets/jss/material-dashboard-react/tableStyle';
import * as React from 'react';
import {
  RegularCard,
} from 'components';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TableCellRenderer } from './Cell/TableCellRenderer';
import { LinearProgress } from '@material-ui/core';
import Hidden, { HiddenProps } from '@material-ui/core/Hidden';

export interface TableParameters {
  title: string;
  apiUrl: string;
  entityName: string;
  filterProps: FilterProps;
  isDashBoard?: boolean;
}

export interface TableColumn {
  name: string;
  label: string;
  labelUnit?: true;
  hide?: HiddenProps;
  width?: number;
  align?: 'center';
  cellRender?: TableCellRenderer;
}

interface TableProps {
  classes: {
    margin: string;
    marginTop: string;
    search: string;
    searchButton: string;
    searchIcon: string;
    table: string;
    tableResponsive: string;
    tableCell: string;
    tableHeadCell: string;
  };
  parameters: TableParameters;
  columns: TableColumn[];
  additionalButtons?: null;
}

interface TableState {
  tableData: string[][];
  isDataLoading: boolean;
  showMessage: boolean;
}

function stableSort<T>(array: T[]) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  return stabilizedThis.map(el => el[0]);
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

class BasicTable extends React.Component<TableProps, TableState> {

  editEnabled: boolean;
  createEnabled: boolean;
  deleteEnabled: boolean;

  constructor(props: TableProps) {
    super(props);
    this.state = {
      tableData: null,
      isDataLoading: true,
      showMessage: false,
    };
    this.getList = this.getList.bind(this);
 
  }

  componentDidMount() {
    this.getList();
  }

  getList() {
    const url = `http://localhost:8090/weatherController/getList`;
    fetch(url, {
        mode: 'no-cors',
        method: 'GET'
      })
    .then(response => response.json())  
    .then((data) => {
        this.setState({
          tableData: data,
          isDataLoading: false
        });
      }
    )
    .catch(error => {
      this.setState({
        isDataLoading: false
      });
    });
  }

  render() {

    const columnCount = this.props.columns.length + 1;

    const tableRows =
      this.state.tableData &&
      stableSort(this.state.tableData)
        .map((rowProp, rowKey) => {
          return (
            <TableRow hover key={rowKey}>
              {this.props.columns.map(column => {
                const value = rowProp[column.name];
                return (
                  <Hidden {...column.hide} key={column.name}>
                  <TableCell 
                    style={{ textAlign: column.align }}
                  >
                     {value}
                  </TableCell>
                  </Hidden>
                );
              })}
            </TableRow>);
        });

    return (
      <div>
        <RegularCard
          cardTitle={this.props.parameters.title}
          content={

          <div className={`${this.props.classes.tableResponsive} ${this.props.classes.marginTop}`} >
           
            <Table className={this.props.classes.table} >
              <TableHead >
                <TableRow>
                  {this.props.columns.map((column: TableColumn) => (
                    <Hidden {...column.hide} key={column.name}>
                    <TableCell
                      style={{ textAlign: column.align }}
                    >
                       <Typography style={{ color: '#000000', fontSize: '1rem' }}>{column.label} </Typography>
                      
                    </TableCell>
                    </Hidden>
                  ))
                  }
                </TableRow>
              </TableHead>
              <TableBody >
              {this.state.isDataLoading ? 
                <tr><td style={{textAlign: 'center' }} colSpan={columnCount}><LinearProgress /></td></tr> : tableRows}
              </TableBody>
            </Table >

          </div>}
        />
      </div>
    );
  }
}

export default withStyles(tableStyle)(BasicTable);
