import React, {Component} from 'react'
import {InputGroup, Input} from '@tkxs/cast-ui'

export class TestInputGroup extends Component {
  render() {
    return (
      <header className="">
        <InputGroup label="This is my label" inputSize="md">
          <Input id="myInput" placeholder="Sample input group" invalid />
        </InputGroup>
        <br />
      </header>
    )
  }
}

export default TestInputGroup
