import React from 'react'
import { storiesOf } from '@storybook/react'

import { Form } from './Form'


storiesOf('Components.Form', module)
  .add('Empty form', () => {
    return (
      <Form></Form>
    )
  })
