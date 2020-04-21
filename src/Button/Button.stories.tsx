import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button, TVariant } from './Button'

const colors: TVariant[] = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark',
  'light',
]

storiesOf('Components.Buttons', module)
  .add('Various Colors and Shapes', () => {
    return (
      <div className='p-2'>
        {
          colors.map(color =>
            <div>
              <div className='d-flex align-items-center'>
                <Button
                  onClick={() => { }}
                  variant={color}
                  id={color}
                >
                  {color}
                </Button>

                <Button
                  onClick={() => { }}
                  variant={color}
                  loading
                >
                  {color}
                </Button>

                <Button
                  onClick={() => { }}
                  variant={color}
                  disabled={true}
                >
                  {color} (disabled)
                </Button>

                <Button
                  onClick={() => { }}
                  variant={color}
                  disabled={true}
                  loading
                >
                  {color} (disabled)
                </Button>

                <div className='pr-3' />

                <Button
                  onClick={() => { }}
                  variant={color}
                  shape='circle'
                >
                  {color.slice(0, 2).toUpperCase()}
                </Button>
              </div>

              <div className='pb-3' />
            </div>
          )
        }
      </div>
    )
  })
