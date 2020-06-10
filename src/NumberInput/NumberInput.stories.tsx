import React from 'react'
import noop from 'lodash/noop'
import { storiesOf } from '@storybook/react'

import { NumberInput } from './NumberInput'

storiesOf('Components.Form.NumberInput', module)
  .add('required whole number', () => {
    return (
      <>
        <div className='m-4'>
          <NumberInput
            label='This is an optional label describing a number field'
            type='whole'
            isRequired={true}
            handleChange={noop}
            handleBlur={noop}
          />
        </div>
        <br />
        <div className='m-4'>
          <NumberInput
            label='This is an optional label describing a float'
            type='positiveFloat'
            isRequired={true}
            handleChange={noop}
            handleBlur={noop}
            units='mg/dL'
          />
        </div>
      </>
    )
  })
