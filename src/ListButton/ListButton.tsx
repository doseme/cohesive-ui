import React from 'react'
import classnames from 'classnames'

import './index.scss'

interface IListButtonProps {
  size?: 'sm' | 'normal'
}

export const ListButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & IListButtonProps> = props => {
  const className = classnames('co-list-button', props.className, { 'co-list-button-sm': props.size === 'sm' })
  return (
    <button 
      {...props} 
      className={className}
    >
      {props.children}
    </button>
  )
}