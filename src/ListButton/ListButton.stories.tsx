import React from 'react'
import { storiesOf } from '@storybook/react'

import { Archive } from '../Icons/Archive'
import { ListButton } from './ListButton'

storiesOf('Components.ListButton', module)
  .add('Various Colors and Shapes', () => {
    return (
      <div>
        <ListButton
          disabled={true}
        >
          <span className='d-flex'>
            <Archive className='px-2' />
            <span>Disabled State</span>
          </span>
        </ListButton>

        <br /><br />

        <ListButton
          disabled={false}
        >
          <span className='d-flex'>
            <Archive className='px-2' />
            <span>Enabled (5) State</span>
          </span>
        </ListButton>
      </div>
    )
})
