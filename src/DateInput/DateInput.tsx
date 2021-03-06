import React, { useState, } from 'react'

import { validate } from './validation'
import { Label, ILabelProps } from '../Label'
import './index.scss'


interface IProps extends ILabelProps {
  label?: string
  name?: string
  defaultValue?: string
  dateNotInPast?: boolean
  disabled?: boolean
  readOnly?: boolean
  handleChange?: (value: string) => void
  handleBlur?: (value: string, isValid: boolean) => void
  handleFocus?: () => void
  className?: string
}

const DateInput: React.FC<IProps> = (props) => {
  const {
    label,
    handleBlur,
    handleChange,
    handleFocus,
    dateNotInPast,
    disabled,
    readOnly,
    name,
    defaultValue,
    ...rest
  } = props

  const isRequired = true

  const [error, setError] = useState<string>('')
  const [isValid, setValid] = useState<boolean>(true)

  const handleValidate = (str: string): boolean => {
    const status = validate({
      isRequired,
      dateNotInPast
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
    const valid = handleValidate(e.currentTarget.value)
    setValid(valid)
    if (handleBlur) {
      handleBlur(e.currentTarget.value, valid)
    }
  }

  const clearAndHandleChange = (value: string) => {
    setError('')
    setValid(true)

    if (handleChange) {
      handleChange(value)
    }
  }

  return (
    <div className={props.className}>
      <Label
        label={label}
        error={error}
        showOptional={props.showOptional}
      />
      <input
        {...rest}
        data-testid={name}
        className={fieldClass}
        defaultValue={defaultValue}
        type='date'
        name={name}
        onBlur={update}
        onChange={e => clearAndHandleChange(e.currentTarget.value)}
        onFocus={handleFocus}
        disabled={disabled}
        readOnly={readOnly}
      />
    </div>
  )
}

export {
  DateInput,
}
