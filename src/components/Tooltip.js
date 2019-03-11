import React, { Component } from 'react';
import { Tooltip, Button } from '@tkxs/cast-ui';

const MyComponent = () => (
  <div>This is a component to be rendered in the tooltip</div>
);

export class TestTooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTooltipOpen: false,
    };
    this.toggleTooltip = this.toggleTooltip.bind(this);
  }

  toggleTooltip() {
    this.setState(state => ({
      isTooltipOpen: !state.isTooltipOpen,
    }));
  }
  render() {
    const { isTooltipOpen } = this.state;
    return (
      <header className="">
        <div>
          <Tooltip
            content={<MyComponent />}
            isVisible={isTooltipOpen}
            trigger="manual"
          >
            <Button btnStyle="primary" onClick={this.toggleTooltip}>
              This button has a controlled tooltip
            </Button>
          </Tooltip>
        </div>
      </header>
    );
  }
}

export default TestTooltip;
