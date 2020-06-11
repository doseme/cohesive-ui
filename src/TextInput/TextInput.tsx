import React, { useState } from 'react'

import { validate } from './validation'
import { Input } from '../Input/Input'
import { Label, ILabelProps } from '../Label'
import '../shared/input.scss'

interface IProps {
  placeholder?: string
  name?: string
  defaultValue?: string
  type?: 'text' | 'password' | 'number'
  maxInputLength?: number
  disabled?: boolean
  isRequired?: boolean
  readOnly?: boolean
  onChange?: (value: string) => void
  onBlur?: (value: string, isValid: boolean) => void
  onFocus?: () => void
  className?: string
  units?: string
}

const TextInput: React.FC<IProps & ILabelProps> = (props) => {
  const {
    label,
    maxInputLength,
    isRequired,
    onBlur,
    onChange,
    onFocus,
    disabled,
    readOnly,
    placeholder,
    name,
    type,
    defaultValue,
    units,
    ...rest
  } = props

  const [error, setError] = useState<string>('')
  const [isValid, setValid] = useState<boolean>(true)

  const onValidate = (str: string): boolean => {
    const status = validate({
      maxInputLength,
      isRequired,
    }, str)

    if (!status.valid && status.message) {
      setError(status.message)
      return false
    }

    setError('')
    return true
  }

  const fieldClass = isValid ? 'ui-form co-input' : 'ui-form form-field-invalid co-input'

  const update = (e: React.FormEvent<HTMLInputElement>): void => {
    const valid = onValidate(e.currentTarget.value)
    setValid(valid)
    if (onBlur) {
      onBlur(e.currentTarget.value, valid)
    }
  }

  const clearAndHandleChange = (value: string) => {
    setError('')
    setValid(true)

    if (onChange) {
      onChange(value)
    }
  }

  return (
    <div className={props.className}>
      <Label 
        label={label}
        error={error}
      />
      <Input 
        {...rest}
        className={fieldClass}
        defaultValue={defaultValue}
        type={type || 'text'}
        placeholder={placeholder || ''}
        name={name}
        valid={isValid}
        onBlur={update}
        onChange={(e) => clearAndHandleChange(e.currentTarget.value)}
        onFocus={onFocus}
        disabled={disabled}
        readOnly={readOnly}
        units={units}
      />
    </div>
  )
}

export {
  TextInput,
}
