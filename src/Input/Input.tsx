import React from 'react'

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
    type,
    defaultValue,
    children,
    ...rest
  } = props

  const fieldClass = valid ? 'ui-form co-input' : 'ui-form form-field-invalid co-input'

  return (
    <input
      {...rest}
      data-testid={name}
      className={fieldClass}
      defaultValue={defaultValue}
      type={type || 'text'}
      placeholder={placeholder || ''}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      disabled={disabled}
      readOnly={readOnly}
    />
  )
}
