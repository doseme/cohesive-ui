import { useState } from 'react'
import { validate, IValidators } from '../NumberInput/validation'

export const useValidation = () => {
  const [error, setError] = useState<string>('')
  const [isValid, setValid] = useState<boolean>(true)

  const handleValidate = (
    str: string, 
    validators: IValidators,
    required: boolean,
    setError: (value: string) => void,
  ): boolean => {
    const status = validate({
      type: validators.type,
      min: validators.min,
      max: validators.max,
      isRequired: required,
    }, str)

    if (!required && str === '') {
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


  return {
    error,
    setError,
    isValid,
    setValid,
    handleValidate
  }
}
