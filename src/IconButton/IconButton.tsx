import React from 'react'

import { CIRCLE_BUTTON_BLUE, LIGHTEST_GREY } from '../style/colors'
import './index.scss'

interface IProps {
  className?: string
  size?: string
  background?: string
  color?: string
  borderColor?: string
  onClick: (evt: React.FormEvent<HTMLElement>) => void
}

const IconButton: React.FC<IProps> = ({ onClick, borderColor, children, background, color, size, className, ...rest }): JSX.Element => {
  const style: React.CSSProperties = {
    height: size,
    width: size,
    background: background || CIRCLE_BUTTON_BLUE,
    color: color || LIGHTEST_GREY,
    border: borderColor ? `1px solid ${borderColor}` : 'none',
  }

  return (
    <button
      {...rest}
      onClick={onClick}
      className={`icon-button ${className || ''}`}
      style={style}
    >
      {children}
    </button>
  )
}

export { IconButton }