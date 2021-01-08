import React from 'react'
import './index.scss'

interface IconProps {
  disabled?: boolean
  ActiveIcon: React.FC<{ className?: string, disabled?: boolean }>
}

export const IconButton: React.FC<IconProps & React.HTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button 
      className='co-icon-button'
    >
      <props.ActiveIcon 
        disabled={props.disabled}
      />
    </button>
  )
}
