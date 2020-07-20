import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { IconButton } from '../IconButton'
import './index.scss'

const ExpandButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = props => {
  return (
    <button
      {...props}
      onClick={props.onClick}
      className='co-expand-button'
    >
      <IconButton
        onClick={() => { }}
        className='co-expand-icon'
      >
        <FontAwesomeIcon icon={faPlus} />
      </IconButton>

      {props.children}
    </button>
  )
}

export {
  ExpandButton
}
