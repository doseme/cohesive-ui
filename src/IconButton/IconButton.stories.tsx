import React from 'react'
import { storiesOf } from '@storybook/react'
import noop from 'lodash/noop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { IconButton } from './IconButton'

const icon = (
  <FontAwesomeIcon
    icon={faPlus}
  />
)

storiesOf('Components.IconButton', module)
  .add('Various Colors and Shapes', () => {
    return (
      <div className='m-3'>

        <div className='p-2'>
          <IconButton 
            onClick={noop}
            size='30px'
          >
            {icon}
          </IconButton>
        </div>

        <code style={{ whiteSpace: 'pre-wrap' }}>
{`
<IconButton 
  onClick={noop}
  size='30px'
>
  {icon}
</IconButton>
`}
        </code> 
        <hr />

        <div className='p-2'>
          <IconButton 
            onClick={noop}
            size='60px'
            background='black'
            color='orange'
          >
            {icon}
          </IconButton>
        </div>

        <code style={{ whiteSpace: 'pre-wrap' }}>
{`
<IconButton 
  onClick={noop}
  size='60px'
  background='black'
  color='orange'
>
  {icon}
</IconButton>
`}
        </code> 

      </div>
    )
  })
