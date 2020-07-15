import React from 'react'
import { storiesOf } from '@storybook/react'

import { Date, IDateState } from './Date'

const defaultValue: IDateState = {
  dd: '01',
  mm: '12',
  yyyy: '1990'
}

storiesOf('Date', module)
  .add('date', () => {
    return (
      <React.Fragment>
        <div style={{ width: '175px' }}>
          <Date label='DOB' format='MM/DD/YYYY' />
        </div>

        <br />

        <div style={{ width: '175px' }}>
          <Date 
            label='DOB' 
            initialValue={defaultValue}
            format='DD/MM/YYYY'
          />
        </div>
      </React.Fragment>
    )
  })
