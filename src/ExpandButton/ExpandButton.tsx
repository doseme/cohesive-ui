import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'

import { IconButton } from '../IconButton'
import './index.scss'

interface IProps {
  className?: string
}

const ExpandButton: React.FC<IProps> = props => {
  const className = classnames('co-expand-wrapper', props.className)

  return (
    <div className={className}>
      <button
        className='co-expand-button'
      >
        <IconButton
          onClick={() => {}}
          className='co-expand-icon'
        >
          <FontAwesomeIcon icon={faPlus} />
        </IconButton>

        <div className='co-expand-button-text'>
          {props.children}
        </div>
      </button>
    </div>
  )
}

export {
  ExpandButton
}
