import React from 'react'
import BsButton, { ButtonProps } from 'react-bootstrap/Button'

import './index.scss'

interface IProps extends ButtonProps {
  onClick: () => void
  shape?: 'circle' | 'rect'
}

const Button: React.FC<IProps> = ({ onClick, children, shape, ...rest }): JSX.Element => {
  return (
    <BsButton
      onClick={onClick}
      className={shape}
      {...rest}
    >
      {children}
    </BsButton>
  )
}

export { Button }