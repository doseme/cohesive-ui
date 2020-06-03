import React from 'react'
import { storiesOf } from '@storybook/react'
import { ConfirmModal } from './ConfirmModal'

const stories = storiesOf('Components.Modals.ConfirmModal', module)

stories.add('Layout with Navigation', () => {
  return (
    <ConfirmModal 
      entityType='Patient'
      onCancel={() => {}}
      onConfirm={() => {}}
    />
  )
})
