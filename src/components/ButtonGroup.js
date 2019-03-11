import React, { Component } from 'react';
import { ButtonGroup, Button } from '@tkxs/cast-ui';

export class TestButtonGroup extends Component {
  render() {
    return (
      <header className="">
        <ButtonGroup role="group" mode="checkbox">
          <Button
            btnStyle="primary"
            btnSize="md"
            outline
            value="1"
            onClick={() => console.log('Button 1')}
          >
            One
          </Button>
          <Button
            btnStyle="primary"
            btnSize="md"
            value="2"
            onClick={() => console.log('Button 1')}
          >
            Two
          </Button>
          <Button
            btnStyle="success"
            btnSize="md"
            value="3"
            outline
            onClick={() => console.log('Button 1')}
          >
            Three
          </Button>
        </ButtonGroup>
        <br />
      </header>
    );
  }
}

export default TestButtonGroup;
