import React from 'react'
import { storiesOf } from '@storybook/react'

import { colors } from '../style/colors'

const stories = storiesOf('Utilities.Colors', module)

stories.add('all', () => {
  return (
    <>
      {
        colors.map(({ color, name }) => (
          <div className='d-flex'>
            <div style={{ background: color, width: '200px', padding: '5px' }}>{name}</div>
            <div style={{ padding: '5px' }}>{name}</div>
          </div>
        ))
      }
    </>
  )
})