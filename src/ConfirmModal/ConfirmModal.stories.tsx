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

stories.add('with async load state and error handling', () => {
  const delay = (ms: number = 1000) => 
    new Promise((res, rej) => 
      setTimeout(() => rej('An error occurred!'), ms))

  const confirm = async () => {
    await delay()
  }

  return (
    <ConfirmModal 
      entityType='Patient'
      onCancel={() => {}}
      onConfirm={confirm}
    />
  )
})


stories.add('customize message and button label', () => {
  const delay = (ms: number = 1000) => 
    new Promise((res, rej) => 
      setTimeout(() => rej('An error occurred!'), ms))

  const confirm = async () => {
    await delay()
  }

  return (
    <ConfirmModal 
      entityType='Patient'
      onCancel={() => {}}
      onConfirm={confirm}
      title='Archive Patient'
      message='The selected patient will be archived from the system. Are you sure?'
      cancelButtonLabel='Dismiss'
      confirButtonLabel='Archive'
    />
  )
})
