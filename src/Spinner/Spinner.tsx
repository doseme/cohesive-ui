import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

import './index.scss'

interface IProps {
  className?: string
  size?: SizeProp
  color?: string
}

const Spinner: React.FC<IProps> = ({className, size, color}): JSX.Element => {
  return (
    <FontAwesomeIcon
      className={className || 'fa-spin'}
      icon={faCircleNotch}
      size={size || 'sm'}
      color={color || 'black'}
    />
  )
}

export {
  Spinner
}
