import React from 'react'
import { storiesOf } from '@storybook/react'

import { Spinner } from './Spinner'

storiesOf('Components.Spinner', module)
  .add('Spinner', () => {
    return (
      <div>
        <h4>Basic loading spinner</h4>
        <Spinner
          size='sm'
        />
      </div>
    )
  })
