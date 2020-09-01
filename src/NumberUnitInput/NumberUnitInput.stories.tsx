import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { NumberUnitInput, INumberUnitMinMax } from './NumberUnitInput'
import { Row, Col } from '../Grid'
import { IRadioOption } from '../RadioGroup'

const Story = ({ required }: { required: boolean }) => {
  const [selected, setSelected] = useState('kg')
  const limits = {
    kg: {
      min: 0,
      max: 100
    },
    lb: {
      min: 0,
      max: 220
    }
  }

  const setSelectedWithUpdatedLimits = (opt: IRadioOption): INumberUnitMinMax => {
    setSelected(opt.value)
    return {
      ...limits[opt.value as 'kg' | 'lb'],
      type: 'positiveFloat'
    }

  }

  const min = limits[selected as 'kg' | 'lb'].min
  const max = limits[selected as 'kg' | 'lb'].max

  return (
    <Row>
      <Col width={6}>
        <NumberUnitInput
          label={`Between ${min} and ${max}`}
          numberInputProps={{
            isRequired: required,
            type: 'positiveFloat',
            min, 
            max
          }}
          radioInputProps={{
            options: [
              {
                id: 'kg',
                value: 'kg',
                display: 'kg'
              },
              {
                id: 'lb',
                value: 'lb',
                display: 'lb'
              }
            ],
            selected,
            onSelectWithValidation: setSelectedWithUpdatedLimits
          }}
        />
      </Col>
    </Row>
  )
}

storiesOf('NumberUnitInput', module)
  .add('with validation', () => {
    return (
      <React.Fragment>
        <h3>Not Required</h3>
        <Story required={false} />
        <h3>Required</h3>
        <Story required={true} />
      </React.Fragment>
    )
  })
