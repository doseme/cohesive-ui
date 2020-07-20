import React from 'react'
import { storiesOf } from '@storybook/react'

import { Archive } from '../Icons/Archive'
import { ListButton } from './ListButton'
import { Trash } from '../Icons'

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

        <br /><br />

        <ListButton disabled={true}>
          <span className='d-flex'>
            <Trash className='px-2' />
            <span>Delete Disabled State</span>
          </span>
        </ListButton>

        <br /><br />

        <ListButton
          disabled={false}
        >
          <span className='d-flex'>
            <Trash className='px-2' background='red' />
            <span>Delete (5) Items</span>
          </span>
        </ListButton>

        <br /><br />

        <ListButton size='sm'>
          <span className='d-flex align-items-center'>
            props.size = 'sm'
          </span>
        </ListButton>
      </div>
    )
})
