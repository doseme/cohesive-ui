import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

import { CIRCLE_BUTTON_BLUE, LIGHTEST_GREY } from '../style/colors'
import './index.scss'

interface OverrideProps {
  className?: string
  size?: string
  background?: string
  color?: string
  borderColor?: string
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

type TProps = Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof OverrideProps> & OverrideProps

const IconButton: React.FC<TProps> = ({ onClick, borderColor, children, background, color, size, className, ...rest }): JSX.Element => {
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
