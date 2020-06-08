import React from 'react'
import { storiesOf } from '@storybook/react'

import { ExpandButton } from './ExpandButton'
import './ExpandButton.stories.scss'

storiesOf('Components.ExpandButton', module)
  .add('default', () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <div id='holder' style={{ position: 'absolute' }}>
          <ExpandButton className='expand-button-override'>Add new patient</ExpandButton>
        </div>
      </div>
    )
  })
