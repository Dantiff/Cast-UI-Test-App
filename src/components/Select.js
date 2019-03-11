import React, { Component } from 'react';
import { Select } from '@tkxs/cast-ui';

export class TestSelect extends Component {
  render() {
    return (
      <header className="">
        <div>
          <Select
            id="mySelect"
            disabled={false}
            inputSize="md"
            invalid={true}
            invalidText="A valid value is required"
            autocomplete
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
          />
        </div>
      </header>
    );
  }
}

export default TestSelect;
