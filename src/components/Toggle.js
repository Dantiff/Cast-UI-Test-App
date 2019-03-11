import React, { Component } from 'react';
import { Toggle } from '@tkxs/cast-ui';

export class TestToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSwitchChecked: true,
    };
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  toggleSwitch(isSwitchChecked) {
    this.setState({ isSwitchChecked });
  }
  render() {
    const { isSwitchChecked } = this.state;
    return (
      <header className="">
        <div>
          <Toggle
            id="toggleId"
            toggleSize="md"
            checked={isSwitchChecked}
            value="1"
            onChange={() => this.toggleSwitch(!isSwitchChecked)}
          >
            One
          </Toggle>
        </div>
      </header>
    );
  }
}

export default TestToggle;
