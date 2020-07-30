import React, { useState, } from 'react'

import { validate } from './validation'
import { Label } from '../Label'
import { Input } from '../Input'
import '../shared/input.scss'


export type TNumberType = 'whole' | 'integer' | 'positiveFloat'

interface IProps {
  label?: string
  type: TNumberType
  placeholder?: string
  name?: string
  defaultValue?: string
  disabled?: boolean
  isRequired?: boolean
  readOnly?: boolean
  min?: number
  max?: number
  handleChange?: (value: string) => void
  handleBlur?: (value: string, isValid: boolean) => void
  handleFocus?: () => void
  className?: string
  units?: string
}

const NumberInput: React.FC<IProps> = (props) => {
  const {
    label,
    handleBlur,
    handleChange,
    handleFocus,
    disabled,
    readOnly,
    type,
    placeholder,
    isRequired,
    name,
    defaultValue,
    units,
    ...rest
  } = props

  const [error, setError] = useState<string>('')
  const [isValid, setValid] = useState<boolean>(true)

  const handleValidate = (str: string): boolean => {
    const status = validate({
      type
    }, str)

    if (!isRequired && str === '') {
      setError('')
      return true
    }

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
      />
      <Input
        {...rest}
        className={fieldClass}
        defaultValue={defaultValue}
        type='text'
        placeholder={placeholder || ''}
        valid={isValid}
        name={name}
        onBlur={update}
        onChange={(e) => clearAndHandleChange(e.currentTarget.value)}
        onFocus={handleFocus}
        disabled={disabled}
        readOnly={readOnly}
        units={units}
      />
    </div>
  )
}

export {
  NumberInput,
}
