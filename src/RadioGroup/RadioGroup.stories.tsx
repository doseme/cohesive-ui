import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { RadioGroup, IRadioOption } from './RadioGroup'
import { Button } from '../Button'

const stories = storiesOf('Components.RadioGroup', module)

const options: IRadioOption[] = [
  {
    id: 'm',
    value: 'm',
    display: 'M'
  },
  {
    id: 'f',
    value: 'f',
    display: 'F'
  }
]

stories.add('Various', () => {
  const Comp = () => {
    const [value, setValue] = useState<string | undefined>()
    const [forceValidate, setForceValidate] = useState(false)
    const isRequired = true

    return (
      <>
        <RadioGroup
          label='Sex'
          errorState={forceValidate}
          selected={value}
          options={options}
          isRequired={isRequired}
          onSelect={(opt: IRadioOption) => {
            setValue(opt.value)
            setForceValidate(false)
          }}
        />
        <br />
        <Button onClick={() => isRequired && !value && setForceValidate(true)} variant='primary'>Submit</Button>
      </>
    )
  }

  return (
    <Comp />
  )
})
