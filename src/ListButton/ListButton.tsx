import React from 'react'

import './index.scss'

export const ListButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  return (
    <button 
      {...props} 
      className='co-list-button'
    >
      {props.children}
    </button>
  )
}