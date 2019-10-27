import React from 'react'
import { storiesOf } from '@storybook/react'

import { AdminLogo } from './AdminLogo'

storiesOf('AdminLogo', module)
  .add('Logo without formatting', () => {
    return (
      <AdminLogo />
    )
  })
