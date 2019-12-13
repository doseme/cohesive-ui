import React, { useState, } from 'react'
import { Form, } from 'react-bootstrap'

import { TFormControlEvent } from '../types'
import './index.scss'
import { validate } from './validation'


interface IProps {
  label?: string
  placeholder?: string
  name?: string
  defaultValue?: string
  type?: 'text' | 'password'
  maxInputLength?: number
  isRequired?: boolean
  disabled?: boolean
  readOnly?: boolean
  handleChange: (value: string, isValid: boolean) => void
}

const TextInput: React.FC<IProps> = (props) => {
  const {
    label,
    maxInputLength,
    isRequired,
    handleChange,
    disabled,
    readOnly,
    placeholder,
    name,
    type,
    defaultValue,
    ...rest
  } = props

  const [error, setError] = useState<string>('')
  const [isValid, setValid] = useState<boolean>(true)

  const handleValidate = (str: string): boolean => {
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

  const fieldClass = isValid ? 'ui-form' : 'ui-form form-field-invalid'

  const update = (e: TFormControlEvent): void => {
    const valid = handleValidate(e.currentTarget.value)
    setValid(valid)
    handleChange(e.currentTarget.value, valid)
  }

  return (
    <div>
      <div className='d-flex'>
        <div className='form-field-label'>{label}{isRequired ? '*' : ''}</div>
        <small className='validation-error-text ml-auto pr-2'>{error}</small>
      </div>
      <Form.Control
        {...rest}
        className={fieldClass}
        defaultValue={defaultValue}
        type={type || 'text'}
        placeholder={placeholder || ''}
        name={name}
        onBlur={update}
        disabled={disabled}
        readOnly={readOnly}
      />
    </div>
  )
}

export {
  TextInput,
}
