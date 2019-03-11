import React, {Component} from 'react'
import {Textarea} from '@tkxs/cast-ui'

export class TestTextarea extends Component {
  render() {
    return (
      <header className="">
        <div>
          <Textarea
            id="myTextarea"
            textareaSize="md"
            disabled={false}
            invalid={true}
            invalidText="A valid value is required"
            maxLength={1000}
            placeholder="Placeholder Text"
            required={false}
            rows={8}
            cols={60}
          />
        </div>
      </header>
    )
  }
}

export default TestTextarea
