import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

import { TFormControlEvent } from '../types'

import '../index.scss'

interface IProps {
  label?: string
  maxInputLength?: number
  isRequired?: boolean
  handleChange: (value: string, isValid: boolean) => void
  type?: 'text' | 'password'
}

const TextInput: React.FC<IProps> = (props) => {
  const {
    label,
    maxInputLength,
    isRequired,
    handleChange
  } = props

  const [error, setError] = useState<string>('')
  const [isValid, setValid] = useState<boolean>(true)

  const validate = (str: string): boolean => {
    if (maxInputLength && str.length > maxInputLength) {
      setError(`Input exceeds max length of ${maxInputLength} characters`)
      return false
    }

    if (isRequired && !str.length) {
      setError('This field is required')
      return false
    }

    setError('')
    return true
  }

  const getFieldClass = (isValid: boolean): string => {
    return isValid ? '' : 'form-field-invalid'
  }

  const update = (e: TFormControlEvent): void => {
    setValid(validate(e.currentTarget.value))
    handleChange(e.currentTarget.value, isValid)
  }

  return (
    <div>
      <div className='d-flex'>
        <div className='form-field-label'>{label}</div>
        <small className='validation-error-text ml-auto pr-2'>{error}</small>
      </div>
      <Form.Control
        className={getFieldClass(isValid)}
        type={props.type || 'text'}
        onBlur={update}
      />
    </div>
  )
}

export {
  TextInput
}
