import React, { Component } from 'react';
import { Alert } from '@tkxs/cast-ui';

export class TestAlert extends Component {
  render() {
    return (
      <header className="">
        <Alert alertStyle="primary" lightMode fullWidth={false}>
          Reminder: Sales meeting at Rm 223 in 10 minutes
        </Alert>
        <br />
      </header>
    );
  }
}

export default TestAlert;
