import React, {Component} from 'react'
import {Input} from '@tkxs/cast-ui'

export class TestInput extends Component {
  render() {
    return (
      <header className="">
        <Input
          id="myInput"
          autoComplete="on"
          invalid={true}
          invalidText="A valid value is required"
          placeholder="Please enter some text"
        />
        <br />
      </header>
    )
  }
}

export default TestInput
