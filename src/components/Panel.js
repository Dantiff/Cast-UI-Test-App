import React, { Component } from 'react';
import styled from 'styled-components';
import { Panel } from '@tkxs/cast-ui';

const StyledPanel = styled(Panel)`
  margin: 24px 32px;
`;
export class TestPanel extends Component {
  render() {
    return (
      <header className="" style={{ minWidth: '80%', color: 'black' }}>
        <StyledPanel title="This is panel" className="make-red">
          Edit <code>src/Button.js</code> and save to reload.
        </StyledPanel>
        <StyledPanel
          name="Catchy Name"
          title="Catchy title"
          collapsible
          headerColor="blue"
          bodyBackgroundColor="lightBackground"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          beatae nostrum quo fuga iste reprehenderit ab fugit, soluta ea! Culpa,
          dignissimos dolores! Delectus fugiat numquam doloremque consequuntur
          tempora ipsam excepturi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Saepe, reiciendis culpa incidunt corporis dolorem
          eum ullam totam cum iusto voluptate, maxime modi porro aperiam eveniet
          tempore ea? Quidem, at harum!
        </StyledPanel>
        <br />
      </header>
    );
  }
}

export default TestPanel;
