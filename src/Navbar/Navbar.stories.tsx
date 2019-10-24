import React from 'react'
import { storiesOf } from '@storybook/react'

import { Navbar } from './Navbar'

storiesOf('Navbar', module)
  .add('Navbar without logo', () => {
    return (
      <Navbar logo={null}>
        <div>Some content goes here</div>
      </Navbar>
    )
  })
