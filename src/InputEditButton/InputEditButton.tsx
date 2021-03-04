import React from 'react'
import { Edit } from '../Icons'

import './index.scss'

interface IProps {
  displayText: string
  onClick?: () => void
}

export const InputEditButton: React.FC<IProps> = (props) => {
  return (
    <button
      className='inputedit-btn'
      onClick={props.onClick}
    >
      <Edit />
      <span>{props.displayText}</span>
    </button>
  )
}
