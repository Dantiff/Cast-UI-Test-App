import React, {Component} from 'react'
import styled from 'styled-components'
import {Button} from '@tkxs/cast-ui'

const StyledButton = styled(Button)`
  background: red;
`
export class TestButton extends Component {
  render() {
    return (
      <header className="">
        <br />
        <Button btnStyle="primary" outline>
          Click for Awesomeness
        </Button>
        <br />
        <br />
        <StyledButton btnStyle="primary" outline>
          Click for Awesomeness
        </StyledButton>
        <br />
      </header>
    )
  }
}

export default TestButton
