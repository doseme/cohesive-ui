import React from 'react'
import classnames from 'classnames'

import '../shared/input.scss'

interface IInputProps {
  label?: string
  placeholder?: string
  name?: string
  defaultValue?: string
  type?: 'text' | 'password' | 'number'
  valid: boolean
  disabled?: boolean
  readOnly?: boolean
  onChange?: (event: React.FormEvent<HTMLInputElement>) => any
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void
  onFocus?: () => void
  className?: string
  units?: string
}

export const Input: React.FC<IInputProps> = (props) => {
  const {
    label,
    onBlur,
    onFocus,
    disabled,
    onChange,
    readOnly,
    placeholder,
    valid,
    name,
    type = 'text',
    defaultValue,
    children,
    units,
    ...rest
  } = props

  const fieldClass = classnames({
    'ui-form co-input': valid, 
    'ui-form form-field-invalid co-input': !valid,
    'co-has-units': !!units
  })

  return (
    <div className='co-input-wrapper'>
      <input
        {...rest}
        data-testid={name}
        className={fieldClass}
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder || ''}
        name={name}
        onBlur={e => onBlur && onBlur(e)}
        onChange={onChange}
        onFocus={onFocus}
        disabled={disabled}
        readOnly={readOnly}
      />
      {units && <div className='co-input-units'>{units}</div>}
    </div>
  )
}
