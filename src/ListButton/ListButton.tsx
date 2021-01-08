import React from 'react'
import classnames from 'classnames'

import './index.scss'

interface IListButtonProps {
  size?: 'sm' | 'md'
}

export const ListButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & IListButtonProps> = props => {
  const className = classnames(
    'co-list-button', props.className, `co-list-button-${props.size || 'md'}`
  )
  return (
    <button 
      {...props} 
      className={className}
    >
      {props.children}
    </button>
  )
}