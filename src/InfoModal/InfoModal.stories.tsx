import React, {useState} from 'react'
import { storiesOf } from '@storybook/react'

import { InfoModal } from './InfoModal'
import { Modal } from '../Modal'
import { Button } from '../Button'

const stories = storiesOf('Components.Modals.InfoModal', module)

stories.add('Basic info modal without link', () => {
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
      message={<MessageContent />}
    />
  )
})

stories.add('Basic info modal with dismiss button', () => {
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
      message={<MessageContent />}
      onDismiss={() => console.log('cancelled')}
    />
  )
})

stories.add('Basic info modal with link', () => {
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
      linkLabel='Start Chat &#8599;'
      message={<MessageContent />}
    />
  )
})

stories.add('Info modal with link component', () => {
  const MessageContent: React.FC = () => {
    return (
        <div>
          This is a test
        </div>
    )
  }

  const linkComponent = (
    <a className='info-link' href='https://www.google.com' target='_blank'>
      <Button
        variant='info'
        className='info-button'
      >
        Try me
      </Button>
    </a>
  )

  return (
    <InfoModal
      title='Patient Help Request'
      linkComponent={linkComponent}
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
            onDismiss={() => setShow(false)}
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
