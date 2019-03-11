import React, { Component } from 'react';
import { DatePicker } from '@tkxs/cast-ui';

export class TestDatepicker extends Component {
  render() {
    return (
      <header className="">
        <DatePicker
          id="datepicker"
          placeholder="Select start date"
          dayPickerProps={{
            selectedDays: [
              new Date('2019-2-5'),
              { from: new Date('2019-2-5'), to: new Date('2019-2-9') },
            ],
          }}
        />
        <br />
      </header>
    );
  }
}

export default TestDatepicker;
