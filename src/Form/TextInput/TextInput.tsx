import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

import { TFormControlEvent } from '../types'

import '../index.scss'

interface IProps {
  maxInputLength: number,
  isRequired: boolean
  handleChange: (value: string, isValid: boolean) => void
}

const TextInput: React.FC<IProps> = (props) => {
  const {
    maxInputLength,
    isRequired,
    handleChange
  } = props

  const [error, setError] = useState<string>('')

  const validate = (str: string): boolean => {
    if (maxInputLength && str.length > maxInputLength) {
      setError(`Input exceeds max length of ${maxInputLength} characters`)
      return false
    }

    if (isRequired && str.length < 1) {
      setError('This field is required')
      return false
    }

    setError('')
    return true
  }

  const update = (e: TFormControlEvent): void => {
    const isValid = validate(e.currentTarget.value)
    handleChange(e.currentTarget.value, isValid)
  }

  return (
    <div>
      <Form.Control
        type='text'
        onBlur={update}
      />
      <small className='pl-2 form-field-invalid'>{error}</small>
    </div>
  )
}

export {
  TextInput
}
