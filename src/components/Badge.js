import React, { Component } from 'react';
import { Badge, Themes } from '@tkxs/cast-ui/lib-esm';

export class TestBadge extends Component {
  render() {
    return (
      <header className="">
        <Badge
          badgeSize="lg"
          badgeStyle="success"
          theme={{ ...Themes.defaultTheme }}
        >
          123
        </Badge>
        <br />
      </header>
    );
  }
}

export default TestBadge;
