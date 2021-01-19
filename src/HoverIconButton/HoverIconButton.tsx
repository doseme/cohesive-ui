import React, { useState } from 'react'

import { IconButton } from '../IconButton'
import { BackArrow } from '../Icons/BackArrow'
import { BackArrowHover } from '../Icons/BackArrowHover'

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element
  hoverIcon: JSX.Element
  className?: string
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const HoverIconButton: React.FC<IProps> = (props) => {
  const [ isHovering, setHovering ] = useState(false)

  const buttonWithHover: JSX.Element = isHovering
    ? (props.hoverIcon)
    : (props.icon)

  return (
    <IconButton
      {...props}
      onClick={props.onClick}
      background='none'
      className={props.className ? `p-0 ${props.className}` : 'p-0'}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {buttonWithHover}
    </IconButton>
  )
}

export {
  HoverIconButton
}
