import React from 'react'
import { storiesOf } from '@storybook/react'

import { ActionButton, TActionButtonType } from './ActionButton'

const types: TActionButtonType[] = ['archive', 'edit', 'unarchive', 'delete', 'import', 'open']

const createActionButton = (type: TActionButtonType, options?: { disabled: boolean }) => {
  return (
    <ActionButton actionType={type} disabled={options?.disabled} />
  )
}
storiesOf('Components.ActionButton', module)
  .add('Various Colors and Shapes', () => {
    return (
      <React.Fragment>
        {types.map(type => {
          return (
            <div>
              {createActionButton(type)}
              {createActionButton(type, { disabled: true })}
            </div>
          )
        })}
  
      </React.Fragment>
    )
  })