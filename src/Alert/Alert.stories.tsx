import React from 'react'
import { storiesOf } from '@storybook/react'

import { Alert, TVariant } from '.'

const stories = storiesOf('Components.Alert', module)

stories.add('Alert', () => {
  const variants: TVariant[] = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]
  const example = (variant: TVariant): string => {
    return `<Alert variant='${variant}'>Content</Alert>`
  }
  
  const content = variants.map((variant, idx) => (
    <div className='m-2'>
      <Alert key={idx} variant={variant}>
        This is a {variant} alert—check it out! Usage: <br /> <br />
          <code style={{ color: 'white' }}>
            {example(variant)}
          </code>
        </Alert>
    </div>
  ))

  return (
    <>
      {content}
    </>
  )
})
