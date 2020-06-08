import React from 'react'
import { storiesOf } from '@storybook/react'

import { DoseMeSpinner } from './DoseMeSpinner'

storiesOf('Components.DoseMeSpinner', module)
  .add('DoseMeSpiner', () => {
    return (
      <div>
        <h4>DoseMe spinner</h4>
        <DoseMeSpinner />
      </div>
    )
  })
