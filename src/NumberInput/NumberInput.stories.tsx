import React from 'react'
import noop from 'lodash/noop'
import { storiesOf } from '@storybook/react'

import { NumberInput } from './NumberInput'

const NumberInputWithMinMax = () => {
  return (
    <div className='m-4'>
      <NumberInput
        label='Min: 0. Max: 10'
        type='positiveFloat'
        min={0}
        max={10}
        isRequired={true}
        handleChange={noop}
        handleBlur={noop}
      />
      <br />
    </div>
  )
}

storiesOf('Components.Form.NumberInput', module)
  .add('required whole number', () => {
    return (
      <>
        <div className='m-4'>
          <NumberInput
            label='This is an optional label describing a number field'
            type='whole'
            showOptional={true}
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
        <NumberInputWithMinMax />
      </>
    )
  })
