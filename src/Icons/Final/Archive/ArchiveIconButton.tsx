import React from 'react'
import { Active } from './Active'
import './index.scss'
import '../index.scss'

interface IconProps {
  disabled?: boolean
}

export const ArchiveIconButton: React.FC<IconProps & React.HTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button {...props} className='co-icon-button co-icon-button-archive'>
      <Active disabled={props.disabled} />
    </button>
  )
}
