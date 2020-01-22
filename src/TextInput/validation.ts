import moment, { Moment } from 'moment'

export interface IValidators {
  maxInputLength?: number
  isRequired?: boolean
  validDate?: boolean
  dateNotInPast?: boolean
}

export interface IValidationResult {
  valid: boolean
  message?: string
}

const validate = (rules: IValidators, text: string): IValidationResult => {
  if (rules.maxInputLength && text.length > rules.maxInputLength) {
    return {
      message: `Input exceeds max length of ${rules.maxInputLength} characters`,
      valid: false,
    }
  }

  if (rules.isRequired && !text.length) {
    return {
      message: 'This field is required',
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