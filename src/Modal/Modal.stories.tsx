import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { Modal } from './Modal'
import { Button } from '../Button'
import { ConfirmModal } from '../ConfirmModal/ConfirmModal'

const stories = storiesOf('Components.Modals.Modal', module)

stories.add('Layout with Navigation', () => {
  const Comp = () => {
    const [show, setShow] = useState(false)

    return (
      <>
        <Modal show={show} onHide={() => setShow(false)}>
          <ConfirmModal 
            entityType='patient'
            onCancel={() => setShow(false)}
            onConfirm={() => setShow(false)}
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
