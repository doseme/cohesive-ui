import React from 'react'
import noop from 'lodash/noop'
import { storiesOf } from '@storybook/react'

import { NumberInput } from './NumberInput'


storiesOf('Components.Form.NumberInput', module)
  .add('required positive whole number', () => {
    return (
      <>
        <div className='m-4'>
          <NumberInput
            label='This is an optional label describing a number field'
            onlyPositiveWholeNumber={true}
            isRequired={true}
            handleChange={noop}
            handleBlur={noop}
          />
        </div>
        <br />
      </>
    )
  })

