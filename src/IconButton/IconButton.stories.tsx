import React from 'react'
import { storiesOf } from '@storybook/react'
import noop from 'lodash/noop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPencilAlt, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons'

import { IconButton } from './IconButton'

const icon = (icon: IconDefinition) => (
  <FontAwesomeIcon
    icon={icon}
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
            {icon(faPlus)}
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
            {icon(faTrash)}
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

        <hr />

        <div className='p-2'>
          <IconButton 
            onClick={noop}
            size='30px'
            background='none'
            color='orange'
            borderColor='orange'
          >
            {icon(faPencilAlt)}
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
