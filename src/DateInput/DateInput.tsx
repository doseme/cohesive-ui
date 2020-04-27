import React, { useState, } from 'react'
import { Form, } from 'react-bootstrap'

import { TFormControlEvent } from '../types'
import './index.scss'
import { validate, IValidators } from './validation'


interface IProps {
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

  const fieldClass = isValid ? 'ui-form' : 'ui-form form-field-invalid'

  const update = (e: TFormControlEvent): void => {
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
      <div className='d-flex'>
        <div className='form-field-label'>{label}{isRequired ? '*' : ''}</div>
        <small className='validation-error-text ml-auto pr-2'>{error}</small>
      </div>
      <Form.Control
        {...rest}
        data-testid={name}
        className={fieldClass}
        defaultValue={defaultValue}
        type='date'
        name={name}
        onBlur={update}
        onChange={(e: TFormControlEvent) => clearAndHandleChange(e.currentTarget.value)}
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
