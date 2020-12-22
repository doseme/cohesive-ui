import React, {useState} from 'react'
import { storiesOf } from '@storybook/react'

import { InfoModal } from './InfoModal'
import { Modal } from '../Modal'
import { Button } from '../Button'

const stories = storiesOf('Components.Modals.InfoModal', module)

stories.add('Info modal', () => {
  const MessageContent: React.FC = () => {
    return (
      <div>
        This is a test
      </div>
    )
  }

  return (
    <InfoModal
      title='Patient Help Request'
      linkHref='https://www.doseme-rx.com'
      linkLabel='Start Chat'
      message={<MessageContent />}
    />
  )
})

stories.add('Info modal with modal trigger', () => {
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
            title='Patient Help Request'
            linkHref='https://www.doseme-rx.com'
            linkLabel='Start Chat'
            message={<MessageContent />}
            onCancel={() => setShow(false)}
          />
        </Modal>

        <Button onClick={() => setShow(true)} variant='primary'>Show Modal</Button>
      </>
    )
  }

  return (
    <Comp />
  )
})
