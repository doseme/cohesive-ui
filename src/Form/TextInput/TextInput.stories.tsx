import React from 'react'
import noop from 'lodash/noop'
import { storiesOf } from '@storybook/react'

import { TextInput } from './TextInput'


storiesOf('Components.Form.TextInput', module)
  .add('Required input, 20 max length', () => {
    return (
      <>
        <div className='m-4'>
          <TextInput
            label='This is an optional label describing a text field'
            maxInputLength={20}
            isRequired={true}
            handleChange={noop}
            handleBlur={noop}
          />
        </div>
        <br />

        <div className='m-4'>
          <TextInput
            label='This is an optional label describing a number only field'
            type='number'
            maxInputLength={20}
            isRequired={true}
            handleChange={noop}
            handleBlur={noop}
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
            handleChange={noop}
            handleBlur={noop}
          />
        </div>
        <br /> 

        <div className='m-4'>
          <TextInput
            type='date'
            label='This is a date field'
            isRequired={true}
            handleChange={noop}
            handleBlur={noop}
          />
        </div>
      </>
    )
  })
