import React, { Component } from 'react';
import { Pagination } from '@tkxs/cast-ui';

export class TestPagination extends Component {
  render() {
    return (
      <header className="">
        <div>
          <Pagination pageCount={10} />
          <br />
          <Pagination pageCount={10} forcePage={4} />
        </div>
      </header>
    );
  }
}

export default TestPagination;
