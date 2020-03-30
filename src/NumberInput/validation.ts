export interface IValidators {
  onlyPositiveWholeNumber?: boolean
  isRequired?: boolean
}

export interface IValidationResult {
  valid: boolean
  message?: string
}

// https://stackoverflow.com/questions/10834796/validate-that-a-string-is-a-positive-integer/10834843
const isNormalInteger = (str: string): boolean => {
  const n = Math.floor(Number(str))
  return n !== Infinity && String(n) === str && n >= 0
}

const validate = (rules: IValidators, text: string): IValidationResult => {
  if (rules.isRequired && !text.length) {
    return {
      message: 'This field is required',
      valid: false,
    }
  }

  // 0 or greater
  if (rules.onlyPositiveWholeNumber && !isNormalInteger(text)) {
    return {
      message: 'Only positive, whole numbers are allowed',
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