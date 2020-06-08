import React from 'react'
import { storiesOf } from '@storybook/react'

import { Skeleton } from './Skeleton'


storiesOf('Components.Skeleton', module)
  .add('loading', () => {
    return (
      <Skeleton />
    )
  })