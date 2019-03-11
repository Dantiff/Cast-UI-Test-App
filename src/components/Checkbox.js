import React, { Component } from 'react';
import { Checkbox } from '@tkxs/cast-ui';

export class TestCheckbox extends Component {
  render() {
    return (
      <header className="">
        <div>
          <Checkbox
            id="myInput1"
            cbSize="lg"
            defaultChecked
            disabled={false}
            value="1"
          >
            One
          </Checkbox>
          <Checkbox
            id="myInput2"
            cbSize="lg"
            defaultChecked
            disabled={false}
            value="2"
          >
            Two
          </Checkbox>
        </div>
      </header>
    );
  }
}

export default TestCheckbox;
