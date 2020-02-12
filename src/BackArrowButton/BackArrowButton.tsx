import React, { useState } from 'react'

import { IconButton } from '../IconButton'
import { BackArrow } from '../Icons/BackArrow'
import { BackArrowHover } from '../Icons/BackArrowHover'

interface IProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const BackArrowButton: React.FC<IProps> = (props) => {
  const [ isHovering, setHovering ] = useState(false)

  const buttonWithHover: JSX.Element = isHovering
    ? (<BackArrowHover />)
    : (<BackArrow />)

  return (
    <IconButton
      onClick={props.onClick}
      background='none'
      className='p-0'
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {buttonWithHover}
    </IconButton>
  )
}

export {
  BackArrowButton
}
