import React from 'react'
import noop from 'lodash/noop'
import { storiesOf } from '@storybook/react'

import { TextInput } from '../TextInput'
import { Button } from '../Button'


storiesOf('Components.Form', module)
  .add('Empty form', () => {
    return (
      <div className='m-4' style={{ maxWidth: '500px' }}>
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => { e.preventDefault() }}>
          <TextInput
            label='Name'
            maxInputLength={20}
            isRequired={true}
            onChange={noop}
            onBlur={noop}
          />
          <br />

          <TextInput
            label='Email'
            maxInputLength={20}
            isRequired={true}
            onChange={noop}
            onBlur={noop}
          />
          <br />

          <Button 
            variant='primary'
            type='submit'
            onClick={noop}
          >
            Submit
          </Button>
        </form>
      </div>
    )
  })
