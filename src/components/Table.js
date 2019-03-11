import React, { Component } from 'react';
import { Table } from '@tkxs/cast-ui';

import * as SampleData from './sampleData/sampleData.json';
import * as ColumnDefs from './sampleData/sampleColumnDefs.json';

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
