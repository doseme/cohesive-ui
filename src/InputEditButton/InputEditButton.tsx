import React from 'react'
<<<<<<< Updated upstream
=======
import { Edit } from '../Icons'
>>>>>>> Stashed changes

import './index.scss'

interface IProps {
  displayText: string
<<<<<<< Updated upstream
=======
  onClick?: () => void
>>>>>>> Stashed changes
}

export const InputEditButton: React.FC<IProps> = (props) => {
  return (
<<<<<<< Updated upstream
    <div>
    </div>
=======
    <button
      className='inputedit-btn'
      onClick={props.onClick}
    >
      <Edit />
      <span>{props.displayText}</span>
    </button>
>>>>>>> Stashed changes
  )
}
