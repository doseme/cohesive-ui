import {
  validate,
  IValidators,
  IValidationResult,
} from './validation'

describe('validate', () => {
  it('invalid - date is required', () => {
    const rules: IValidators = {
      isRequired: true
    }

    const expected: IValidationResult = {
      valid: false,
      message: 'Required',
    }

    const actual = validate(rules, '')

    expect(actual).toEqual(expected)
  })

  it('invalid - date cannot be in past', () => {
    const rules: IValidators = {
      isRequired: true,
      dateNotInPast: true,
    }

    const expected: IValidationResult = {
      valid: false,
      message: 'Date cannot be in the past',
    }

    const actual = validate(rules, '1000-01-01')

    expect(actual).toEqual(expected)
  })

  it('valid - the date is valid and not in the past', () => {
    const rules: IValidators = {
      dateNotInPast: true,
    }

    const expected: IValidationResult = {
      valid: true,
    }

    const actual = validate(rules, '9999-12-31')

    expect(actual).toEqual(expected)
  })
})