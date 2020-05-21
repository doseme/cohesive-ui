import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { Toggle, IToggleOption } from './Toggle'

const currentArchived: IToggleOption[] = [
  {
    id: 'current',
    value: 'current',
    label: 'Current',
  },
  {
    id: 'archived',
    value: 'archived',
    label: 'Archived',
  }
]

const sizes: IToggleOption[] = [
  { id: 'very small', value: 'very small', label: 'Very Small' },
  { id: 'small', value: 'small', label: 'Small' },
  { id: 'medium', value: 'medium', label: 'Medium' },
  { id: 'large', value: 'large', label: 'Large' },
  { id: 'very large', value: 'very large', label: 'This is very large label' },
]

storiesOf('Components.Toggle', module)
  .add('Basic', () => {
    const Comp = (props: { options: IToggleOption[], defaultSelected: string }) => {
      const [selected, setSelected] = useState<string>(props.defaultSelected)
      return (
        <Toggle 
          name='Patients to show'
          selected={selected}
          options={props.options}
          onChange={option => setSelected(option.id)}
        />
      )
    }

    return (
      <>
        <div className='p-2'>
          <Comp options={currentArchived} defaultSelected='current' />
        </div>

        <div className='p-2'>
          <Comp options={sizes} defaultSelected='medium' />
        </div>
      </>
    )
  })
