import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { Toggle, IToggleOption } from './Toggle'
import { Row, Col } from '../Grid'
import { Icons } from '..'

const currentArchived: IToggleOption[] = [
  {
    id: 'current',
    value: 'current',
    label: 'Current',
    element: <div>Active<Icons.HollowCircle stroke='red' /></div>
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
        <h2>Expands to fill the container</h2>
        <Comp options={currentArchived} defaultSelected='current' />
        <br />
        <Comp options={sizes} defaultSelected='medium' />

        <h2>Use Grid/Col to contraint</h2>

<code style={{ whiteSpace: 'pre-wrap' }}>
{`
<Row>
  <Col width={5}>
    <Comp options={sizes} defaultSelected='medium' />
  </Col>
</Row>
`}
</code>
<br />

        <Row>
          <Col width={5}>
            <Toggle 
              name='Patients to show'
              selected='medium'
              options={sizes}
              onChange={() => {}}
            />
          </Col>
        </Row>
      </>
    )
  })
