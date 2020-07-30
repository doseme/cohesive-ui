import { TNumberType } from './NumberInput'

export interface IValidators {
  type: TNumberType
  isRequired?: boolean
  min?: number
  max?: number
}

export interface IValidationResult {
  valid: boolean
  message?: string
}

// https://stackoverflow.com/questions/10834796/validate-that-a-string-is-a-positive-integer/10834843
const isWhole = (str: string): boolean => {
  const n = Math.floor(Number(str))
  return n !== Infinity && String(n) === str && n >= 0
}

const isInteger = (str: string): boolean => {
  const n = Math.floor(Number(str))
  return n !== Infinity && String(n) === str
}

const isPositiveFloat = (str: string): boolean => {
  const [beforeDecimal, afterDecimal, rest] = str.split('.')
  if (rest) {
    // only allow 1 decimal point
    return false
  }
  
  if (afterDecimal) {
    // contains floating values
    return isWhole(beforeDecimal) && isWhole(afterDecimal)
  }

  return isWhole(beforeDecimal)
}

const validate = (rules: IValidators, text: string): IValidationResult => {
  if (rules.isRequired && !text.length) {
    return {
      message: 'Required',
      valid: false,
    }
  }

  if (rules.type === 'whole' && !isWhole(text)) {
    return {
      message: 'Whole numbers only',
      valid: false,
    }
  }

  if (rules.type === 'integer' && !isInteger(text)) {
    return {
      message: 'Integers only',
      valid: false,
    }
  }

  if (rules.type === 'positiveFloat' && !isPositiveFloat(text)) {
    return {
      message: 'Positive numbers only',
      valid: false,
    }
  }

  if (rules.min && parseFloat(text) < rules.min) {
    return {
      message: `Must be greater than ${rules.min}`,
      valid: false,
    }
  }

  if (rules.max && parseFloat(text) > rules.max) {
    return {
      message: `Must be less than ${rules.max}`,
      valid: false,
    }
  }

  return {
    valid: true,
  }
}

export {
  validate,
}
