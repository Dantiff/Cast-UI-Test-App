import React, {Component} from 'react'
import {ic_keyboard_arrow_down as IKAD} from 'react-icons-kit/md/ic_keyboard_arrow_down'
import {ic_add as icAdd} from 'react-icons-kit/md/ic_add'
import {info} from 'react-icons-kit/fa/info'
import {IconButton} from '@tkxs/cast-ui'

export class TestIconButton extends Component {
  render() {
    return (
      <header className="">
        <IconButton
          rounded
          icon={info}
          iconsize={10}
          pixelbuttonsize={18}
          btnSize="sm"
          btnStyle="success"
        />
        <br />
        <br />
        <IconButton
          rounded
          icon={IKAD}
          iconsize={20}
          pixelbuttonsize={32}
          btnSize="sm"
          btnStyle="primary"
        />
        <br />
        <br />
        <IconButton
          rounded
          icon={icAdd}
          iconsize={20}
          pixelbuttonsize={32}
          btnSize="sm"
          btnStyle="primary"
        />
        <br />
        <br />
      </header>
    )
  }
}

export default TestIconButton
