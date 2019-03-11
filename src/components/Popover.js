import React, { Component } from 'react';
import { Popover, Button } from '@tkxs/cast-ui';

const MyComponent = () => (
  <div>
    This can be a component
    <br />
    or text.
  </div>
);

export class TestPopover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopoverOpen: false,
    };
    this.togglePopover = this.togglePopover.bind(this);
  }

  togglePopover() {
    this.setState(state => ({
      isPopoverOpen: !state.isPopoverOpen,
    }));
  }
  render() {
    const { isPopoverOpen } = this.state;
    return (
      <header className="">
        <div>
          <Popover
            content={<MyComponent />}
            isVisible={isPopoverOpen}
            arrow
            size="regular"
            placement="bottom-end"
            trigger="manual"
          >
            <Button
              btnSize="md"
              btnStyle="primary"
              onClick={this.togglePopover}
            >
              This button has a controlled popover
            </Button>
          </Popover>
        </div>
      </header>
    );
  }
}

export default TestPopover;
