import React from 'react'
import { storiesOf } from '@storybook/react'
import { InputEditButton } from './InputEditButton'

storiesOf('Components.InputEditButton', module)
  .add('InputEditButton', () => {
    return (
      <React.Fragment>
        <h1>Input Edit Button with Hover</h1>
        <br/>
        <InputEditButton
          displayText='2 hours'
        />
      </React.Fragment>
    )
  })
