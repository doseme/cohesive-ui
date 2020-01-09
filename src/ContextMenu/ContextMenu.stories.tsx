import React from 'react'
import { storiesOf } from '@storybook/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

import { ContextMenu, IListItem } from './ContextMenu'

const stories = storiesOf('Components.ContextMenu', module)

const icon = (
  <FontAwesomeIcon
    className='m-2'
    icon={faShare}
  />
)

stories.add('Basic', () => {
  const items: IListItem[] = [
    {
      id: 1,
      icon,
      text: 'Settings',
    },
    {
      id: 2,
      icon,
      text: 'Back to DoseMeRx'
    },
  ]

  return (
    <div className='m-5'>
      <ContextMenu
        header='Cohesive UI'
        items={items}
      />
    </div>
  )
})

