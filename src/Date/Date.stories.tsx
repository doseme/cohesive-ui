import React from 'react'
import { storiesOf } from '@storybook/react'

import { Date } from './Date'

storiesOf('Date', module)
  .add('date', () => {
    return (
      <div style={{ width: '175px' }}>
        <Date label='DOB' />
      </div>
    )
  })
