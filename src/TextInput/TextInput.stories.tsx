import React, { useState } from 'react'
import noop from 'lodash/noop'
import { storiesOf } from '@storybook/react'

import { TextInput, IAsyncValidationResult } from './TextInput'

const AsyncValidationStory = () => {
  const [returnValid, setReturnValid] = useState(false)

  const asyncValidator = async (): Promise<IAsyncValidationResult> => {
    return new Promise(res => {
      setTimeout(() => res({ 
        valid: returnValid, 
        message: returnValid ? 'available' : 'already exists'
      }), 500)
    })
  }

  return (
    <div className='m-4'>
      <h3 className='co-h3'>Async Validation</h3>
      <div className='my-2'>
        <input id='valid' type='checkbox' checked={returnValid} onChange={() => setReturnValid(!returnValid)} />
        <label htmlFor='valid'>Return valid response?</label>
      </div>

      <TextInput
        label='Async validation'
        onChange={noop}
        onBlur={noop}
        asyncValidator={asyncValidator}
      />
    </div>
  )
}

storiesOf('Components.Form.TextInput', module)
  .add('Required input, 20 max length', () => {
    return (
      <>
        <div className='m-4'>
          <TextInput
            label='This is an optional label describing a text field'
            maxInputLength={20}
            isRequired={true}
            onChange={noop}
            onBlur={noop}
          />
        </div>
        <br />

        <div className='m-4'>
          <TextInput
            label='This is an optional label describing a number only field'
            type='number'
            maxInputLength={20}
            isRequired={true}
            onChange={noop}
            onBlur={noop}
          />
        </div>
        <br /> 

        <div className='m-4'>
          <TextInput
            label='This is a readonly field'
            maxInputLength={20}
            isRequired={true}
            disabled={true}
            readOnly={true}
            defaultValue='Read only'
            onChange={noop}
            onBlur={noop}
          />
        </div>

        <div className='m-4'>
          <TextInput
            label='This has a default value'
            maxInputLength={20}
            isRequired={true}
            defaultValue='Default value'
            onChange={noop}
            onBlur={noop}
          />
        </div>

        <div className='m-4'>
          <TextInput
            label='With units'
            maxInputLength={20}
            isRequired={true}
            defaultValue='Default value'
            onChange={noop}
            onBlur={noop}
            units='mg'
          />
        </div>

        <AsyncValidationStory />
      </>
    )
  })
