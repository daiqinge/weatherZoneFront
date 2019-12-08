import * as React from 'react';
import { BasicTable } from 'components';
import { TableParameters, TableColumn } from './Table/BasicTable';

export interface EntityListProps {
}

export abstract class EntityList extends React.Component<EntityListProps> {

  constructor(props:  EntityListProps) {
    super(props);

    this.columns = this.createColumns();
    this.parameters = this.createParameters();
  }

  columns: TableColumn[];
  parameters: TableParameters;

  abstract createColumns(): TableColumn[];
  abstract createParameters(): TableParameters;

  render() {
    return (
      <BasicTable
        columns={this.columns}
        parameters={this.parameters}
        additionalButtons={null}
      />        
    );
  }
}
