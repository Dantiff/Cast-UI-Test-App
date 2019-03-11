import React, {Component} from 'react'
import styled from 'styled-components'
import {Button, Themes} from '@tkxs/cast-ui'

const StyledButton = styled(Button)`
  background: red;
`
export class TestButton extends Component {
  render() {
    return (
      <header className="">
        <br />
        <Button label={'Enroll'} btnStyle="success" theme={Themes.defaultTheme}>
          Click for Awesomeness
        </Button>
        <br />
        <br />
        <StyledButton btnStyle="primary" outline>
          Click for Awesomeness
        </StyledButton>
        <br />
        <br />

        <Button
          label={'Enroll'}
          btnStyle="success"
          theme={Themes.defaultTheme}
          onClick={() => {}}>
          {' '}
          Greetings{' '}
        </Button>
        <br />
      </header>
    )
  }
}

export default TestButton
