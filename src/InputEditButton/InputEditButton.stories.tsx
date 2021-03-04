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

        <br/>
        <br/>
        <h3>Edited value</h3>
        <InputEditButton
          displayText='2 hours'
          edited
        />
      </React.Fragment>
    )
  })
