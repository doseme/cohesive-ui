import React from 'react'

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

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any
  variant: TVariant
  className?: string
  size?: 'sm'
  shape?: 'circle' | 'rect'
  loading?: boolean
}

const Button: React.FC<IProps> = ({ onClick, children, shape, className, loading, variant, size, ...rest }): JSX.Element => {
  const content = (
    loading
      ? (
        <div className='spinner-container' data-testid='loading'>
          <div className='child-keep-width'>{children}</div>
          <div className='spinner-display w-100'>
            <Spinner color={variant} />
          </div>
        </div>
      ) : children
  )

  const sizeClass = size ? `co-btn-${size}` : ''

  return (
    <div>
      <button
        onClick={onClick}
        className={`${shape} ${className} ${sizeClass} btn-${variant}`}
        {...rest}
      >
        {content}
      </button>
    </div>
  )
}

export { Button }