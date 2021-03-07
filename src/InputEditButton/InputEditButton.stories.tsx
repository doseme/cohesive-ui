import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { InputEditButton } from './InputEditButton'
import { Modal } from '../Modal'
import { InfoModal } from '../InfoModal'

storiesOf('Components.InputEditButton', module)
  .add('InputEditButton states', () => {
    return (
      <React.Fragment>
        <h1>Input Edit Button with Hover</h1>
        <br/>
        <InputEditButton
          displayText='2 hours'
        />

        <br/>
        <br/>
        <h3>Edited value</h3>
        <InputEditButton
          displayText='2 hours'
          edited
        />
      </React.Fragment>
    )
  })

storiesOf('Components.InputEditButton', module)
  .add('InputEditButton with modal hook', () => {
    const Comp = () => {
      const [show, setShow] = useState(false)

      const MessageContent: React.FC = () => {
        return (
          <div>
            This is a test
          </div>
        )
      }

      return (
        <>
          <Modal show={show} onHide={() => setShow(false)}>
            <InfoModal
              title='Update Value'
              linkLabel='Update'
              message={<MessageContent />}
              onDismiss={() => setShow(false)}
            />
          </Modal>

          <h1>Input Edit Button with Modal Hook</h1>
          <br/>
          <InputEditButton
            onClick={() => setShow(true)}
            displayText='1 hour'
          />
        </>
      )
    }

    return (
      <Comp />
    )
  })
