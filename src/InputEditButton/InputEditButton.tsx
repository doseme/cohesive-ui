import React from 'react'
import classnames from 'classnames'

import { Edit } from '../Icons'

import './index.scss'

interface IProps {
  displayText: string
  edited?: boolean
  onClick?: () => void
}

export const InputEditButton: React.FC<IProps> = (props) => {
  const className = classnames({'input-edited-value': props.edited})

  return (
    <button
      className='inputedit-btn'
      onClick={props.onClick}
    >
      <Edit height={18} />
      <span className={className}>{props.displayText}</span>
    </button>
  )
}
