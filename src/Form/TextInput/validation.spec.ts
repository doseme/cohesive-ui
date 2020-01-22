import {
  validate,
  IValidators,
  IValidationResult,
} from './validation'

describe('validate', () => {
  it('invalid - value is required', () => {
    const rules: IValidators = {
      maxInputLength: 10,
      isRequired: true,
    }

    const expected: IValidationResult = {
      valid: false,
      message: 'This field is required',
    }

    const actual = validate(rules, '')

    expect(actual).toEqual(expected)
  })

  it('invalid - value is too long', () => {
    const rules: IValidators = {
      maxInputLength: 5,
      isRequired: true,
    }

    const expected: IValidationResult = {
      valid: false,
      message: `Input exceeds max length of 5 characters`,
    }

    const actual = validate(rules, '123456')

    expect(actual).toEqual(expected)
  })

  it('valid - the field is the correct length and not null', () => {
    const rules: IValidators = {
      maxInputLength: 5,
      isRequired: true,
    }

    const expected: IValidationResult = {
      valid: true,
    }

    const actual = validate(rules, '12345')

    expect(actual).toEqual(expected)
  })
})