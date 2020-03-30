import {
  validate,
  IValidators,
  IValidationResult,
} from './validation'

describe('validate', () => {
  const rules: IValidators = {
    onlyPositiveWholeNumber: true,
    isRequired: true

  }

  const invalid: IValidationResult = {
    valid: false,
    message: 'Only positive, whole numbers are allowed',
  }

  test('onlyPositiveWholeNumber invalid', () => {
    const actual = validate(rules, 'asdf')
    expect(actual).toEqual(invalid)
  })

  test('onlyPositiveWholeNumber invalid', () => {
    const actual = validate(rules, '123.')
    expect(actual).toEqual(invalid)
  })

  test('onlyPositiveWholeNumber invalid', () => {
    const actual = validate(rules, '-123')
    expect(actual).toEqual(invalid)
  })

  test('onlyPositiveWholeNumber invalid', () => {
    const actual = validate(rules, '')
    expect(actual).toEqual({ valid: false, message: 'This field is required' })
  })

  test('onlyPositiveWholeNumber valid', () => {
    const actual = validate(rules, '123')
    expect(actual).toEqual({ valid: true })
  })

  test('onlyPositiveWholeNumber valid', () => {
    const actual = validate(rules, '0')
    expect(actual).toEqual({ valid: true })
  })
})