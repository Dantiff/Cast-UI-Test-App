import React, {Component} from 'react'
import styled from 'styled-components'
import {Button, Panel} from '@tkxs/cast-ui'

const StyledPanel = styled(Panel)`
  text-align: left;
  background: red;
`
const StyledButton = styled(Button)`
  background: red;
`
export class TestAlert extends Component {
  render() {
    return (
      <header className="">
        <StyledPanel
          panelStyle="success"
          title="This is panel"
          className="make-red">
          Edit <code>src/Alert.js</code> and save to reload.
        </StyledPanel>
        <br />
        <Button btnStyle="primary" outline>
          Click for Awesomeness
        </Button>
        <br />
        <StyledButton btnStyle="primary" outline>
          Click for Awesomeness
        </StyledButton>
        <br />
      </header>
    )
  }
}

export default TestAlert
