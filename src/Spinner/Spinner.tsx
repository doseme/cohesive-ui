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

const Spinner: React.FC<IProps> = ({className = 'fa-spin', size = 'sm', color = 'black'}): JSX.Element => {
  return (
    <FontAwesomeIcon
      className={className}
      icon={faCircleNotch}
      size={size}
      color={color}
    />
  )
}

export {
  Spinner
}
