import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import flatten from 'lodash/flatten'

import { Button } from '../Button'
import { Tooltip, ITooltipMenuItem } from './Tooltip'

const data: ITooltipMenuItem[] = [
  {
    id: '1',
    value: 'some-link',
    element: <a href='/'>Some link</a>,
  }
]

storiesOf('Components.Tooltip', module)
  .add('Tooltip', () => {
    const Comp = (
      position: 'top' | 'bottom' | 'left' | 'right', 
      arrow: 'left' | 'right' | 'center', 
      parent: string
    ) => () => {
      const [active, setActive] = useState(false)
      return (
        <>
          <Button style={{ margin: '10px' }} variant='primary' onClick={() => setActive(true)} id={parent}>
            {parent}
          </Button>
          <Tooltip
            data={data}
            onClickAway={() => setActive(false)}
            active={active}
            position={position}
            arrow={arrow}
            parent={`#${parent}`}
          />
        </>
      )
    }

    const Components = flatten(
      ['top', 'bottom', 'left', 'right'].map(pos => {
        return ['left', 'right', 'center'].map(arrow => {
          // @ts-ignore
          const TT = Comp(pos, arrow, `${pos}-${arrow}`)
          return <TT />
        })
      })
    )

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {Components}
      </div>
    )
  })
