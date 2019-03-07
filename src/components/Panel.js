import React, {Component} from 'react'
import styled from 'styled-components'
import {Panel} from '@tkxs/cast-ui'

const StyledPanel = styled(Panel)`
  text-align: left;
  background: red;
`
export class TestPanel extends Component {
  render() {
    return (
      <header className="">
        <StyledPanel
          panelStyle="success"
          title="This is panel"
          className="make-red">
          Edit <code>src/Button.js</code> and save to reload.
        </StyledPanel>
        <br />
      </header>
    )
  }
}

export default TestPanel
