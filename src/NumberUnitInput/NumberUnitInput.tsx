import React, { useState } from 'react'
import { RadioGroup, TRadioGroupProps, IRadioOption } from '../RadioGroup'
import { Input } from '../Input'
import { INumberInputProps, TNumberType } from '../NumberInput/NumberInput'
import { useValidation } from '../hooks/useValidation'
import { Label } from '../Label'
import { IValidators } from '../NumberInput/validation'
import './index.scss'

interface INumberUnitInputProps {
  dataTestId?: string // good for testing
  numberInputProps: INumberInputProps 
  radioInputProps: Omit<TRadioGroupProps, 'onSelect'> & {
    onSelectWithValidation: (option: IRadioOption) => INumberUnitMinMax
  }
  label?: string
}

export interface INumberUnitMinMax {
  type: TNumberType
  min: number
  max: number
}

export const NumberUnitInput: React.FC<INumberUnitInputProps> = (props) => {
  const {
    error,
    setError,
    isValid,
    setValid,
    handleValidate
   } = useValidation()
   // we need to save the value in local state so we can do immediate validation when
   // switching between units (instead of waiting for onBlur like in other inputs, which may never happen).
   const [cachedValue, setCachedValue] = useState(props.numberInputProps.defaultValue || '')

  const validateAndBlur = (value: string, validators?: IValidators) => {
    const valid = handleValidate(
      value,
      {
        min: validators?.min || props.numberInputProps.min,
        max: validators?.max || props.numberInputProps.max,
        type: validators?.type || props.numberInputProps.type,
      },
      !!props.numberInputProps.isRequired,
      setError
    )

    setValid(valid)
    if (props.numberInputProps.handleBlur) {
      props.numberInputProps.handleBlur(value, valid)
    }
  }

  const update = (e: React.FormEvent<HTMLInputElement>): void => {
    validateAndBlur(e.currentTarget.value)
  }

  const clearAndHandleChange = (value: string) => {
    setCachedValue(value)
    setError('')
    setValid(true)

    if (props.numberInputProps.handleChange) {
      props.numberInputProps.handleChange(value)
    }
  }

  const selectAndValidate = async (option: IRadioOption) => {
    const validators: INumberUnitMinMax = props.radioInputProps.onSelectWithValidation(option)
    validateAndBlur(cachedValue, validators)
  }

  return (
    <div>
      <Label
        label={props.label}
        error={error}
        showOptional={props.numberInputProps.showOptional}
      />
      <div className='co-number-unit-input'>
        <Input
          {...props.numberInputProps}
          valid={isValid}
          type='text'
          onBlur={update}
          onChange={(e) => clearAndHandleChange(e.currentTarget.value)}
        />

        <RadioGroup
          {...props.radioInputProps}
          onSelect={selectAndValidate}
        />
      </div>
    </div>
  )
}
