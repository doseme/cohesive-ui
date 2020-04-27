import React from 'react'
import noop from 'lodash/noop'
import { storiesOf } from '@storybook/react'

import { DateInput } from './DateInput'


storiesOf('Components.Form.DateInput', module)
  .add('Required input, 20 max length', () => {
    return (
      <>
        <div className='m-4'>
          <DateInput
            name='start'
            label='This is a date field. Currently date fields are required by default'
            handleChange={noop}
            handleBlur={noop}
          />
        </div>
        <br />

        <div className='m-4'>
          <DateInput
            name='start'
            label='This date field does not accept past dates'
            handleChange={noop}
            handleBlur={noop}
            dateNotInPast={true}
          />
        </div>
        <br />
      </>
    )
  })
