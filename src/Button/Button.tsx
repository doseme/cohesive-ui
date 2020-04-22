import React from 'react'
import BsButton, { ButtonProps } from 'react-bootstrap/Button'

import { Spinner } from '../Spinner'

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
  id?: string
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any
  variant: TVariant
  className?: string
  shape?: 'circle' | 'rect'
  loading?: boolean
}

const Button: React.FC<IProps> = ({ onClick, children, shape, className, loading, variant, ...rest }): JSX.Element => {
  return (
    <div>
      <BsButton
        onClick={onClick}
        className={`${shape} ${className}`}
        variant={variant}
        {...rest}
      >
        {loading
          ? <div className='spinner-container'>
              <div className='child-keep-width'>{children}</div>
              <div className='spinner-display w-100'><Spinner color={variant}/></div>
            </div>
          : children
        }
      </BsButton>
    </div>
  )
}

export { Button }