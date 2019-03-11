import React, { Component } from 'react';
import { Badge } from '@tkxs/cast-ui';

export class TestBadge extends Component {
  render() {
    return (
      <header className="">
        <Badge badgeSize="lg" badgeStyle="success">
          123
        </Badge>
        <br />
      </header>
    );
  }
}

export default TestBadge;
