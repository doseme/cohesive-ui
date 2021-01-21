import React from 'react'
import { storiesOf } from '@storybook/react'
import { noop } from 'lodash'

import { HoverIconButton } from './HoverIconButton'
import { FileDrop } from '../Icons'
import { FileDropHover } from '../Icons/FileDropHover'

const stories = storiesOf('Components.HoverIconButton', module)

stories.add('HoverIconButton', () => {
  return (
    <div className='m-3'>
      <h2>Hover Icon Button</h2>
      <HoverIconButton
        icon={<FileDrop/>}
        hoverIcon={<FileDropHover/>}
        onClick={noop}
      />
    </div>
  )
})