import React, { Component } from 'react';
import { Table } from '@tkxs/cast-ui';

import SampleData from './sampleData/sampleData';
import ColumnDefs from './sampleData/sampleColumnDefs';

export class TestTable extends Component {
  render() {
    return (
      <header className="" style={{ color: 'black' }}>
        <div>
          <Table data={SampleData.Customers} columns={ColumnDefs} />
        </div>
      </header>
    );
  }
}

export default TestTable;
