export interface IValidators {
  maxInputLength?: number
  isRequired?: boolean
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
      message: 'Required',
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