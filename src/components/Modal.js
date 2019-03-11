import React, { Component } from 'react';
import { Modal, Button } from '@tkxs/cast-ui';

export class TestModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(state => ({
      isModalOpen: !state.isModalOpen,
    }));
  }
  render() {
    const { isModalOpen } = this.state;
    return (
      <header className="">
        <Button onClick={this.toggleModal} btnStyle="primary">
          {' '}
          Open Modal
        </Button>
        <Modal
          isOpen={isModalOpen}
          id="myModal"
          buttonType="OkCancel"
          modalTitle="Hello Modal"
          onCancelOrNo={this.toggleModal}
          onOkOrYes={this.toggleModal}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Modal>
        <br />
      </header>
    );
  }
}

export default TestModal;
