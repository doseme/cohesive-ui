import moment, { Moment } from 'moment'

export interface IValidators {
  isRequired?: boolean
  dateNotInPast?: boolean
}

export interface IValidationResult {
  valid: boolean
  message?: string
}

const validate = (rules: IValidators, text: string): IValidationResult => {
  if (rules.isRequired && (!text.length || moment(text, 'YYYY-MM-DD').toString() === 'Invalid date')) {
    return {
      message: 'This field is required',
      valid: false
    }
  }

  if (rules.dateNotInPast && moment().startOf('day').isAfter(moment(text, 'YYYY-MM-DD').startOf('day'))) {
    return {
      message: 'Date cannot be in the past',
      valid: false
    }
  }

  return {
    valid: true,
  }
}

export {
  validate,
}