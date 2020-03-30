import {
  validate,
  IValidators,
  IValidationResult,
} from './validation'

describe('validate', () => {
  const rules: IValidators = {
    type: 'whole',
    isRequired: true
  }

  const invalid: IValidationResult = {
    valid: false,
    message: 'Only whole numbers are allowed',
  }

  test('isWhole invalid', () => {
    const actual = validate({ type: 'whole' }, 'asdf')
    expect(actual).toEqual(invalid)
  })

  test('isWhole invalid', () => {
    const actual = validate({ type: 'whole' }, '123.')
    expect(actual).toEqual(invalid)
  })

  test('isWhole invalid', () => {
    const actual = validate({ type: 'whole' }, '-123')
    expect(actual).toEqual(invalid)
  })

  test('isRequired invalid', () => {
    const actual = validate({ type: 'whole', isRequired: true }, '')
    expect(actual).toEqual({ valid: false, message: 'This field is required' })
  })

  test('isWhole valid', () => {
    const actual = validate({ type: 'whole' }, '123')
    expect(actual).toEqual({ valid: true })
  })

  test('isWhole valid', () => {
    const actual = validate({ type: 'whole' }, '0')
    expect(actual).toEqual({ valid: true })
  })

  test('isInteger invalid', () => {
    const actual = validate({ type: 'integer' }, '0.1')
    expect(actual).toEqual({ valid: false, message: 'Only integers are allowed' })
  })

  test('isInteger valid', () => {
    const actual = validate({ type: 'integer' }, '-1')
    expect(actual).toEqual({ valid: true })
  })

  test('isInteger valid', () => {
    const actual = validate({ type: 'integer' }, '1')
    expect(actual).toEqual({ valid: true })
  })
})
