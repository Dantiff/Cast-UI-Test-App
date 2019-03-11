import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from '@tkxs/cast-ui';

export class TestRadioButton extends Component {
  render() {
    return (
      <header className="">
        <div>
          <RadioButton
            id="myInput1"
            disabled={false}
            rbSize="md"
            value="1"
            checked
            onChange={() => console.log('Radio clicked')}
          >
            One
          </RadioButton>
          <br />
          <br />
          <RadioButtonGroup
            name="myRadioButtonGroup"
            defaultChecked="1"
            onChange={() => console.log('Radio group clicked')}
          >
            <RadioButton id="myInput1" disabled={false} rbSize="md" value="1">
              One
            </RadioButton>
            <RadioButton id="myInput2" disabled={false} rbSize="md" value="2">
              Two
            </RadioButton>
          </RadioButtonGroup>
        </div>
      </header>
    );
  }
}

export default TestRadioButton;
