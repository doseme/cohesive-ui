import React from 'react'
import BsButton, { ButtonProps } from 'react-bootstrap/Button'

import './index.scss'

export type TVariant = 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'light'

interface IProps extends ButtonProps {
  onClick: () => void
  variant: TVariant
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