import { TNumberType } from './NumberInput'

export interface IValidators {
  type: TNumberType
  isRequired?: boolean
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

const validate = (rules: IValidators, text: string): IValidationResult => {
  if (rules.isRequired && !text.length) {
    return {
      message: 'This field is required',
      valid: false,
    }
  }

  if (rules.type === 'whole' && !isWhole(text)) {
    return {
      message: 'Only whole numbers are allowed',
      valid: false,
    }
  }

  if (rules.type === 'integer' && !isInteger(text)) {
    return {
      message: 'Only integers are allowed',
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
