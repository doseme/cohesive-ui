import React from 'react'
import { storiesOf } from '@storybook/react'

import { TextInput } from './TextInput'


storiesOf('Components.Form.TextInput', module)
  .add('Required input, 20 max length', () => {
    return (
      <div>
        <div>This text field updates off focus. Changes are being logged to the console.</div>
        <TextInput
          label='This is an optional label'
          maxInputLength={20}
          isRequired={true}
          handleChange={() => {}}
        />
      </div>
    )
  })
