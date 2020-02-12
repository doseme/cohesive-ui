import React from 'react'
import { storiesOf } from '@storybook/react'
import { noop } from 'lodash'

import { BackArrowButton } from '.'

const stories = storiesOf('Components.BackArrowButton', module)

stories.add('BackArrowButton', () => {
  return (
    <div className='m-3'>
      <h2>Back Arrow Button</h2>
      <BackArrowButton
        onClick={noop}
      />
    </div>
  )
})