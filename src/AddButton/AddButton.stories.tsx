import React from 'react'
import { storiesOf } from '@storybook/react'

import { AddButton } from './AddButton'
import './AddButton.stories.scss'

storiesOf('Components.AddButton', module)
  .add('default', () => {
    return (
      <React.Fragment>
        <AddButton
          onClick={() => console.log('Click')}
          className='expand-button-override'
        >
          Add patient
      </AddButton>

      <br />

      <AddButton
        onClick={() => console.log('Click')}
        className='expand-button-override'
        disabled={true}
      >
        Add patient
      </AddButton>

      <br />

      <AddButton
        onClick={() => console.log('Click')}
        size='sm'
        className='expand-button-override'
      >
        Small
    </AddButton>
    </React.Fragment>
  )
})
