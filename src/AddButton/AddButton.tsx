import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'

import { IconButton } from '../IconButton'
import './index.scss'

interface IAddButtonProps {
  disabled?: boolean
}

const AddButton: React.FC<React.HTMLAttributes<HTMLDivElement> & IAddButtonProps> = props => {
  const className = classnames('co-add-button', { 'co-add-button-disabled': props.disabled })
  return (
    <div
      {...props}
      className={className}
    >
      <IconButton
        onClick={() => { }}
        className='co-add-icon'
      >
        <FontAwesomeIcon icon={faPlus} />
      </IconButton>

      {props.children}
    </div>
  )
}

export {
  AddButton
}
