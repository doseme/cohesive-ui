import React, { useState } from 'react'

import { validate } from './validation'
import { Input } from '../Input/Input'
import { Label, ILabelProps } from '../Label'
import { Spinner } from '../Spinner'
import '../shared/input.scss'
import { PANELBLUE } from '../style/colors'
import { Checkmark } from '../Icons/Checkmark'
import { Cross } from '../Icons/Cross'

export interface IAsyncValidationResult {
  valid: boolean
  message: string
}

interface IProps {
  placeholder?: string
  name?: string
  defaultValue?: string
  type?: 'text' | 'password' | 'number'
  maxInputLength?: number
  disabled?: boolean
  isRequired?: boolean
  readOnly?: boolean
  className?: string
  units?: string
  asyncValidator?: (value: string) => Promise<IAsyncValidationResult>
  onChange?: (value: string) => void
  onBlur?: (value: string, isValid: boolean) => void
  onFocus?: () => void
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
    asyncValidator,
    ...rest
  } = props

  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [validityIcon, setValidityIcon] = useState<JSX.Element | undefined>()
  const [success, setSuccess] = useState('')
  const [isValid, setValid] = useState(true)

  const onValidate = async (str: string): Promise<boolean> => {
    const status = validate({
      maxInputLength,
      isRequired,
    }, str)

    if (!status.valid && status.message) {
      setError(status.message)
      return false
    }

    if (props.asyncValidator) {
      setLoading(true)
      setError('')
      setValidityIcon(<Spinner size='1x' color={PANELBLUE} />)

      // it is possible in input value is valid on the client side but async validation could fail.
      // eg: duplicate longid/mrn.
      const asyncResult = await props.asyncValidator(str)
      setLoading(false)

      if (!asyncResult.valid) {
        setError(asyncResult.message)
        setValidityIcon(<Cross />)
        setSuccess('')
        return false
      } else {
        setSuccess(asyncResult.message)
        setValidityIcon(<Checkmark />)
      }
    }

    setError('')
    return true
  }

  const fieldClass = isValid ? 'ui-form co-input' : 'ui-form form-field-invalid co-input'

  const update = async (e: React.FormEvent<HTMLInputElement>): Promise<void> => {
    const value = e.currentTarget.value
    const valid = await onValidate(value)
    setValid(valid)

    if (onBlur) {
      onBlur(value, valid)
    }
  }

  const clearAndHandleChange = (value: string) => {
    setError('')
    setSuccess('')
    setValidityIcon(undefined)
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
        info={loading ? 'checking system...' : undefined}
        success={success}
        showOptional={props.showOptional}
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
        icon={validityIcon}
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
