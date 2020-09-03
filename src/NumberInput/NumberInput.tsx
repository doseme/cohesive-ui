import React from 'react'

import { Label, ILabelProps } from '../Label'
import { Input } from '../Input'
import { useValidation } from '../hooks/useValidation'

export type TNumberType = 'whole' | 'integer' | 'positiveFloat'

export interface INumberInputProps extends ILabelProps {
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

const NumberInput: React.FC<INumberInputProps> = (props) => {
  const {
    error,
    setError,
    isValid,
    setValid,
    handleValidate
   } = useValidation()

  const fieldClass = isValid ? 'ui-form co-input' : 'ui-form form-field-invalid co-input'

  const update = (e: React.FormEvent<HTMLInputElement>): void => {
    const valid = handleValidate(
      e.currentTarget.value, 
      {
        min: props.min,
        max: props.max,
        type: props.type,
      },
      !!props.isRequired,
      setError
    )

    setValid(valid)
    if (props.handleBlur) {
      props.handleBlur(e.currentTarget.value, valid)
    }
  }

  const clearAndHandleChange = (value: string) => {
    setError('')
    setValid(true)

    if (handleChange) {
      handleChange(value)
    }
  }

  const {
    label,
    handleChange,
    handleFocus,
    isRequired,
    showOptional,
    handleBlur,
    ...rest
  } = props

  return (
    <div className={props.className}>
      <Label 
        label={label}
        error={error}
        showOptional={props.showOptional}
      />
      <Input
        {...rest}
        className={fieldClass}
        type='text'
        valid={isValid}
        name={name}
        onBlur={update}
        onChange={(e) => clearAndHandleChange(e.currentTarget.value)}
        onFocus={handleFocus}
      />
    </div>
  )
}

export {
  NumberInput,
}
